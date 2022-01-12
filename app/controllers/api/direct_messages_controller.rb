class Api::DirectMessagesController < ApplicationController
    skip_before_action :verify_authenticity_token
    def index
        @direct_messages = DirectMessage.where(
            "(receiver_id = #{params[:receiver_id]} OR receiver_id = #{params[:author_id]}) 
            AND 
            (author_id = #{params[:author_id]} OR author_id = #{params[:receiver_id]})"
        )
        render :index
    end

    def show
        @direct_message = DirectMessage.find_by(id: params[:id])
        if @direct_message
            render :show
        else
            render json: ["Message does not exist."], status: 404
        end
    end

    def create
        if User.find_by(id: params[:direct_message][:receiver_id])
            @direct_message = DirectMessage.new(dm_params)
            if @direct_message.save
                render :show
            else
                render @direct_message.errors.full_messages, status: 400
            end
        else
            render json: ["User does not exist"], status: 400
        end
    end

    def update
        @direct_message = DirectMessage.find_by(id: params[:id])
        if @direct_message.nil?
            render json: ["Message does not exist."], status: 404
        elsif @direct_message.update(update_params)
            render :show
        else
            render @direct_message.errors.full_messages, status: 422
        end
    end

    def destroy
        @direct_message = DirectMessage.find_by(id: params[:id])
        @direct_message.destroy
        render :show
    end
        
    
    private 
    def dm_params
        params.require(:direct_message).permit(:content, :author_id, :receiver_id)
    end

    def update_params
        params.require(:direct_message).permit(:content)
    end
end
