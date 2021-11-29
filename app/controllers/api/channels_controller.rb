class Api::ChannelsController < ApplicationController
    def index
        # TODO: this will change to get channel by server
        @channels = Channel.all
        render :index
    end

    def show    
        @channel = Channel.find_by(id: params[:id])
        if @channel
            render :show
        else
            render json: ["Channel does not exist."], status: 404
        end
    end

    def create
        @channel = Channel.new(channel_params)
        if @channel.save
            render :show
        else
            render @channel.errors.full_messages, status: 400
        end
    end
    

    def update
        @channel = Channel.find_by(id: params[:id])
        if @channel.nil?
            render json: ["Channel does not exist."], status: 404
        elsif @channel.update(channel_params)
            render :show
        else
            render @channel.errors.full_messages, status: 400
        end
    end

    def destroy
        # TODO: Check memberships if channel is deleted
        @channel = Channel.find_by(id: params[:id])
        @channel.destroy
        render json: {}
    end
    
    private
    def channel_params
        params.require(:channel).permit(:name, :description)
    end
end
