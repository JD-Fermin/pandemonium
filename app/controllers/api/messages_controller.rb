class Api::MessagesController < ApplicationController
    before_action :get_channel
    def index
        @messages = @channel.messages
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
            ChatChannel.broadcast_to(@channel, Api::MessagesController.render(:show, locals: {message: @message}))
        else
            render @message.errors.full_messages, status: 422
        end
    end

    def create
        # @channel = Channel.find_by(id: message_params[:channel_id])
        # if @channel.nil?
        #     render json: ["Channel does not exist"], status: 400
        # end
        @message = Message.new(message_params)
        if @message.save
            ChatChannel.broadcast_to(@channel, Api::MessagesController.render(:show, locals: {message: @message}))
            # render :show, locals: {message: @message}
        else
            render @message.errors.full_messages, status: 422
        end
    end

    def destroy
        @message = Message.find_by(id: params[:id])
        @message.destroy
        ChatChannel.broadcast_to(@channel, Api::MessagesController.render(:show, locals: {message: @message}))
    end

    private
    def message_params
        params.require(:message).permit(:content, :author_id, :channel_id)
    end

    def update_params
        params.require(:message).permit(:content)
    end

    def get_channel
        @channel = Channel.find_by(id: params[:channel_id])
    end
    

end
