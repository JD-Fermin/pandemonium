class Api::ConversationsController < ApplicationController
    def index
        @conversartions = current_user.conversations
        render :index
    end

    def show
        @conversation = Conversation.find_by(id: params[:id])
        
        if @conversation
            render :show
        else
            render json: ["Conversation does not exist."], status: 404
        end
        
    end
    
    def create
       if User.find_by(id: params[:conversation][:user_id])
           @conversation = Conversation.create
           UserConversation.create(user_id: current_user.id, conversation_id: @conversation.id)
           UserConversation.create(user_id: params[:conversation][:user_id], conversation_id: @conversation.id)
           render :show
       else
        render json: ["User does not exist."], status: 404
       end
    end

    

    def destroy
        @conversation = Conversation.find_by(id: params[:id])
        @conversation.destroy
        render :show
    end
    
    private
    def conversation_params
        params.require(:conversation).permit(:user_id)
    end
    
    
end
