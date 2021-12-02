class Api::ServersController < ApplicationController
    def index
        # TODO: this will change to get channel by server
        if params[:user_id]
            @user = User.find_by(id: params[:user_id])
            @servers = @user.joined_servers
        else
            @servers = Server.order("RANDOM()").limit(9).to_a.uniq
        end
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
            Channel.create(name: 'general', server_id: @server.id)
            Membership.create(user_id: @server.owner_id, server_id: @server.id)
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
        params.require(:server).permit(:name, :description, :owner_id)
    end
end
