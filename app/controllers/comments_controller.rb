class CommentsController < ApplicationController
 rescue_from ActiveRecord::RecordNotFound, with: :render_error
rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
 
   

    def index
       render json: Comment.all,status: :ok
    end 

   

    def show
        comment= find_comment
        render json: comment, status: :ok
    end

     def update
        comment = find_comment
        Comment.update!(comment_params)
        render json: comment
    end

    def create
        comment= Comment.create!(comment_params)
        render json: comment, status: :created
    end


    def destroy
        comment = find_comment
        Comment.destroy
        head :no_content
    end

    private

    def render_error
        render json: { error: "Comment not found" }, status: :not_found
     end
    
    def find_comment
         Comment.find(params[:id])
    end
    
    def comment_params
        params.permit(:description, :photo_id)
    end

    def render_unprocessable_entity_response(invalid)
        render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
    end

end
