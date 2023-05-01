# ASSESSMENT 6: Rails Commenting Challenge

# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 comment tags


# FILE: app/controller/blog_posts_controller.rb

# ---1)Purpose is to generate a controller application and class for "BlogPosts" which controls the behavior of the entire code. The name of the controller will follow the PascalCase naming convention. The functionality of the controller creates a class for BlogPosts in the Application controller and this is the main source that all of your code will be inputed. The purpose and functionality of defining a method "index" is to add instances of the class controller to the database to access a list of all the things that is going to interact with the database. It is a controller method that makes an Active Record call that saves and holds the active record queries in the controller.   
class BlogPostsController < ApplicationController
  def index
    # ---2) The purpose is to create an instance variable named "@posts" that belongs to the class controller app "BlogPosts" and calls on the index controller method. The functionality uses the '.all' built-in method that will display all of the data values in the BlogPost database. The instance variable will make an Active Record .all action call by referencing the controller name that will save all of the content from the database as an instance variable. It will hold all of the active record queries in the database. The "end" closes the code logic block, whatever is contained between the define and end lines are specific to that code block.  
    @posts = BlogPost.all
  end

  # ---3) The purpose is to define a method of a class called "show" that will give us the details of a specific item in the database.    The functionality of creating an instance variable named "@post" for the method is to find and locate certain specific detailed information in the database and make an Active Record .find action call by referencing the controller name. The ".find" built-in method will look thru all of the information in the BlogPost database and display only that one item. The URL params/parameters gets passed as an argument in a set of parentheses which it then passes the id of a blog post as a second argument to get the id value which is set in square brackets, preceded by a colon (:) and both are set to the '.find' built-in method to access only a specific blog id in the database. The "end" closes the code logic block, what ever is contained between the define and end lines are specific to that code block. 
  def show
    @post = BlogPost.find(params[:id])
  end

  # ---4) The purpose of this is to define a method of the class named "new" to create an instance variable named "@post" to allow access to add or create a new form to the application that will be stored in the database. We can create as many instance variables as we want. The functionality of the method, after defining it, is to call upon the instance variable of the class "@post" and use an assignment operator to call on the Active Record .new action by referencing the controller name to input a new post with the built-in method '.new'. This will allow access to input and store a new Blog Post into the database. The "end" closes the code logic block, what ever is contained between the define and end lines are specific to that code block. Then we will define a new method of the class named "create" to add content to the new blog post form in the database. 
  def new
    @post = BlogPost.new
  end

  def create
    # ---5) This is an instance variable named "@post" for the method create. The functionality of this instance variable will allow access to create and submit a new blog post and set up parameters for what can be accessed when creating a new entry into the database. Therefore, we call on the Active Record .create action to call on a strong params method and pass in a strong params argument named "blog_post_params" and set conditions to allow specific access to information in the database. The strong params method will be listed under the keyword "private" at the end. A conditional stament starts with the word "if", then we call on an instance variable "@post" and use a built-in method named '.valid?' to ask the database to read the new information requested for input and decide whether or not it is valid and meets the requirements that are set in the strong params method. If the new input is valid, we will redirect back to the blog_post page by using the 'redirect_to' method to direct a certain page's URL path (route alias), we will reference the path to return it to the new post that was created by passing the instance variable "@post" as an argument set in parameters by using parentheses and it will add the new entry into the database. The "end" closes the conditional statement and defined method code logic block, what ever is contained between the define and end lines are specific to that code block. Then we will define a new method of the class named "edit" to allow access to edit the blog post.   
    @post = BlogPost.create(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    end
  end

  def edit
    # ---6)The instance variable assigns the class BlogPost and calls on the Active Record .find action to find or locate an item in the database by using the '.find' built-in method. We pass an argument named "params" in a set of parentheses to reference the parameters we want to set and allow access to. Then within the params argument, we pass in a second argument to request the database to only locate and return one item by a specific id to edited and we pass in the URL params 'id' in a set of square brackets and add a colon (:) before the 'id' to get the 'id' value. This pulls the value of 'id' from the params database and returns only the edited blog post with that specific id. The "end" closes the code logic block, whatever is contained between the define and end lines are specific to that code block. Then we want to define a new method of the class named "update" to allow access to update a blog post to be stored in the database. We use the instance variable "@post", reference the controller name and call on the Active Record ''.find' to find and update a blog post using the same functionality and code logic as above for editing. 
    @post = BlogPost.find(params[:id])
  end

  def update
    @post = BlogPost.find(params[:id])
    # ---7) We want the instance variable named "@post" to to set certain parameters that allow access to update a specific blog post in the database calling on the Active Record .update action and pass in an argument for the strong params named "blog_post_params" in a set of parentheses to limit what can be accessed to update and what the input requirements are to be stored in the database. We will use a conditional statement starting with "if" and will set a condition that requests the database to read and decide if the updated input is valid make an Active Record .valid? action call using the '.valid?' built-in method. If the input matches and is validated by the params requirements set, we will allow the input request to update the blog post, entered into the database and direct it back to the updated blog post page by referencing the URL alias path 'blog_post' and pass in the instance variable "@post" as an argument in a set of parentheses to return to the updated blog post page. The "end" closes the conditional statement and defined method code logic block, whatever is contained between the define and end lines are specific to that code block. Then we define a new method of the class named "destroy" to allow access to destroy or delete a blog post within the database. The instance variable named "@post" will call on and assign the controller class Active Record .find action to find or locate a specific post by using the '.find' built-in method and passing in a params argument in a set of parentheses named "params" and reference a specific 'id' in a set of square brackets and add a colon (:) before the 'id' to get the 'id' value. This pulls the value of "id" from the params database. We set a conditional statement starting with "if" to create a condition that will take the instance variable and ask the database to read and decide if the requested input matches the params requirements. If the input for the blog post is valid we will call on the Active Record .destroy action to delete only the specific blog post with the matching id and remove it from the database. It will not return anything because the blog post has been deleted.
    @post.update(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    end
  end

  def destroy
    @post = BlogPost.find(params[:id])
    if @post.destroy
      # ---8) This method redirects a user back to the blog_posts index page URL alias if the book is destroyed and is not found in the database. The "end" for the conditional statement and the defined method closes the code logic block, whatever is contained between the define and end lines are specific to that code block.
      redirect_to blog_posts_path
    end
  end
  # ---9) When creating a 'strong params' method we label it "private" to limit where the method can be called on. Private is a keyword that restricts the scope of a method. Under this private keyword, there is no chance the strong params can be called on from somewhere else in the program. The private keyword must be placed above the defined params method name "blog_post_params", at the bottom of the controller file and below the controller actions because once it is implemented, everything below it is included in its protection. Strong params control the information allowed into a database. Strong params sets restrictions on the controller methods. Strong params can only be passed into the show, create, edit, update and delete methods as arguments.  
  private
  def blog_post_params
    # ---10) This defined strong params method is named "blog_post_params". To set certan limitations and requirement in the strong params we use a strong params built-in method named '.require' that sets up certain requirements that must be met in order to allow access to the database. The strong params method name (minus the word 'params') is used to refefence the controller and it must always match the method name, is preceded with a colon (:) and passed as an argument in a set of parentheses. Then the params will permit access to the database contents of the "title" and "content" only by using the strong params'.permit' built-in method which sets the permissions. Then we pass in the title and content columns as aruguments in a set of parentheses, preceded by a colon (:) which will set required pemissions to only only allow access to read, create, update, edit or delete the title or content in the database. Anything not listed in the strong params will not be allowed access the database. The "end" for the defined strong params method closes the code logic block, whatever is contained between the define and end lines are specific to that code block. The "end" for the class controller closes all of the code logic contained within the database controller application.  
    params.require(:blog_post).permit(:title, :content)
  end
end
