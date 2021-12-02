class Api::MembershipsController < ApplicationController
    def create
        @membership = Membership.new(membership_params)
        if @membership.save
            render :show
        else
            render json: @membership.errors.full_messages, status: 400
        end
    end

    def index
        @user = User.find_by(id: params[:user_id])
        @memberships = @user.memberships
        render :index
    end
    
    def destroy
        @membership = Membership.find_by(id: params[:id])
        @membership.destroy
        render :show
    end
    
    
    private
    def membership_params
        params.require(:membership).permit(:user_id, :server_id)
    end
    
end
