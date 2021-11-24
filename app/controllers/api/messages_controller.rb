class Api::MessagesController < ApplicationController
    def index
        @messages = Message.all
        render :index
    end

    def show
        @message = Message.find_by(id: params[:id])
        if @message
            render :show
        else
            render json: ["Message does not exist."], status: 404
        end
    end

    def update
        @message = Message.find_by(id: params[:id])
    
        if @message.nil?
            render json: ["Message does not exist."], status: 404
        elsif @message.update(update_params)
            render :show
        else
            render @message.errors.full_messages, status: 422
        end
    end

    def create
        @message = Message.new(message_params)
        if @message.save
            render :show
        else
            render @message.errors.full_messages, status: 422
        end
    end

    def destroy
        @message = Message.find_by(id: params[:id])
        @message.destroy
        render :show
    end
    private
    def message_params
        params.require(:message).permit(:content, :author_id)
    end

    def update_params
        params.require(:message).permit(:content)
    end
    

end
