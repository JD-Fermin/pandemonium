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
            ActionCable.server.broadcast('chat_channel', Api::MessagesController.render(:show, locals: {message: @message}))
        else
            render @message.errors.full_messages, status: 422
        end
    end

    def create
        @message = Message.new(message_params)
        if @message.save
            ActionCable.server.broadcast('chat_channel', Api::MessagesController.render(:show, locals: {message: @message}))
            # render :show, locals: {message: @message}
        else
            render @message.errors.full_messages, status: 422
        end
    end

    def destroy
        @message = Message.find_by(id: params[:id])
        @message.destroy
        ActionCable.server.broadcast('chat_channel', Api::MessagesController.render(:show, locals: {message: @message}))
    end
    private
    def message_params
        params.require(:message).permit(:content, :author_id)
    end

    def update_params
        params.require(:message).permit(:content)
    end
    

end
