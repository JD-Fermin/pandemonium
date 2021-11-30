class Api::ServersController < ApplicationController
    def index
        # TODO: this will change to get channel by server
        @servers = Server.all
        render :index
    end

    def show    
        @server = Server.find_by(id: params[:id])
        if @server
            render :show
        else
            render json: ["Server does not exist."], status: 404
        end
    end

    def create
        @server = Server.new(server_params)
        if @server.save
            render :show
        else
            render @server.errors.full_messages, status: 400
        end
    end
    

    def update
        @server = Server.find_by(id: params[:id])
        if @server.nil?
            render json: ["Server does not exist."], status: 404
        elsif @server.update(server_params)
            render :show
        else
            render @server.errors.full_messages, status: 400
        end
    end

    def destroy
        
        @server = Server.find_by(id: params[:id])
        @server.destroy
        render :show
    end

    private
    def server_params
        params.require(:server).permit(:name, :description)
    end
end
