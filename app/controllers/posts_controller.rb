class PostsController < ApplicationController
  def index
    @posts = Post.all.order("created_at DESC")
  end

  def create
    @post = Post.new(post_params)
    if @post.save
      redirect_to root_path
    else
      render :index
    end
  end

  def destroy
    post = Post.find(params[:id])
    if post.destroy
      redirect_to root_path
    end
  end

  private

  def post_params
    params.permit(:text)
  end
end
