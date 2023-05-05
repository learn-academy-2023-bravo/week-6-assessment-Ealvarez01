# ASSESSMENT 6: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. As a developer, I am creating a Rails application with a model called Cohort and a model called Student. The cohort model has_many students, but OOPS! I forgot to add the foreign key. How can I fix this mistake? What is the name of the foreign key? Would the foreign key be on the Cohort model or the Student model?

Your answer:
$rails g model Cohort name:string year:string
(has_many) students

$rails g model Student name:string
(belongs_to) the cohort

To fix the mistake and add the foreign key to the model Cohort we have to go to the migration file to update the column in the database for the Student model. Inside the change method, write: 'add_column cohort_id:integer' then run '$rails db:migrate' in the terminal to update the column. To connect/map the foreign key to a relation in the database, we need to add the changes between the defined class method in the class Application Record file to show: "belongs_to :cohort" (singular) relation. 

The name of the foreign key is '_id'.

The foreign key would be on the Student model which we will need to update the migration file in the database under the change method to add a new column for the foreign key and add a relation of 'belongs_to' that will connect the student information to the Cohort information (a student belongs to a cohort-singular). The Cohort model already has a migration defined method 'has_many' (a cohort has many students - plural) that will link the Cohort information to the student information.

Researched answer:
We can fix this mistake of forgetting to create a foreign key by creating a migration in the terminal or editing the migration file within the database. Must create a new command in the terminal (use snake_case or PascalCase): $rails generate migration 'add_column_to_table' or 'AddColumnToTable'. This will generate a new Active Record Migration file in the migration database. The changes will need to be added within the new class migration file 'AddColumnToTable' under the defined method code block. To add the new column we write: 'add_column :cohort_id', :integer (column_name with foreign key). This will update the schema.rb file and create a new version of the database simultaneously. 

Foreign keys in the database have an '_id' key name and will map the relations to the keys automatically if the names match. The foreign key should always be the 'modelname_id' and the data should be an integer. 

The foreign key will be on the Student model because it always goes on the 'belongs_to side'. There are already primary key id's assigned automatically by rails to each entry in the Cohort model database. Foreign keys are a column in the database that connects between data in two tables and references the primary key of another table which allows both tables to connect to eachother. Relations are snake_case and are called 'has_one', 'belongs_to', 'has_many', 'has_one :through', 'Has_and_belongs_to_many', and 'has_many :through'.

2. Which RESTful routes must always be passed params? Why?

Your answer:
The show, edit, update and destroy RESTful routes must always be passed with params. The URL, controller name and method name must always be passed inside of the params. They get passed in params because the controller calls the methods, collects the data from the model in the database and sends it to be displayed. Params pass in data into a controller method to query the database or modify the view. Params change as we navigate and add information into the URL. The URL requires a param so that not just any value can be added to the database. Routes require a param because the application will not function how it is intended if any of the required information listed in the params is missing. 

Researched answer:
Route params are used to capture the specified values at a certain position in a given URL. We can use any of the RESTful routes to pass in params. They are query parameters and are customized to input/display specific data that is required for the application to function as intended. Params are useful because they create retrictions on what a user is or is not allowed to do or see in a database. They are able to specify certain items to be called on from anywhere within the database file to clean up the code for better viewing instead of having to keep referencing different items throughout the code, making the code appear longer. RESTful routes (controller actions - 'index, show, new, create, edit, update and destroy' (methods))provide mapping of the HTTP verbs 'post, get, put, patch, and delete (requests) to the CRUD actions 'create, read, update and delete' (philosophy). 

3. Name three rails generator commands. What is created by each?

Your answer:
$ rails generate model 
- This creates a model file and can be named whatever we choose. The model file creates the name and datypes for each colum which handles all of the data and logic. 

$rails generate controller 
- This creates a controller file (use PascalCase). Controllers handle requests and retrieve data from the model. It holds all the active record queries and grabs data to give us what we need. 

$rails generate migration 
- This rail generator command generates a migration file. The migration file adds columns, items, lists, etc. to a table and modifies the existing database.

Researched answer:
$rails generate model:
- This action generates a model class (singular, PascalCase) to include the table name (plural, snake_case), name of table column(s) in the model (singular, snake_case), name of table row(s) in the model, datatypes - :strings, :integers, :text, :float, :dateime, and :boolean (:associated with the name columns(s)), and primary keys(unique identifier of each instance created, automatically assigned by Ruby). Once created, a new file appears in the app/models for the model class (singular, snake_case) and the file name (singular and snake_case) with a .rb file extension. It also creates the database schema file with a .rb extension which displays the table and columns information in list form in the database. Note: The schema file cannot be changed or edited within the model file. 

$rails generate controller
- This action generates a controller class (singular, PascalCase) file. The controller actions use the snake_case naming convention and matches the route controller file names for: index, show, new, create, edit, update and delete (all route files are snake_case), followed with a .rb file extension.

$rails generate migration
- This action generates a migration(PascalCase or snake_case) file. File names should begin with a description of the action that you want to take (add, create, remove, etc) and ends with the table name (create_item_to_list). The generate migration command creates a new file in the migration directory to modify the changes or updates to the database that we want within the code block of the 'def change' method. We can create a new column, edit a column name, remove a column or datatype, ect. This creation will change the contents of the database. This is where you can modify and update the schema.rb file that is in the database model. 

4. Consider the Rails routes below. What is the name of the controller method that would be called by each route? What action would each of the controller methods perform?

action: "GET" location: /students
  Method: Index/Get
  Performance: Calls on the method "students", connects to the URL and displays list of all students in the database model.

action: "POST" location: /students
  Method: Create/Post
  Performance: Create or add a new form or information for all students to the database.

action: "GET" location: /students/new
  Method: New/Get
  Performance: Return or displays a form to the user for creating a new student in the database. 

action: "GET" location: /students/2
  Method: Show/Get
  Performance: Lists one specific student #2 in the database model.

action: "GET" location: /students/2/edit
  Method: Edit
  Performance: Returns a form for editing a specific student #2 in the database.

action: "PATCH" location: /students/2
  Method: Update
  Performance: Updates and modifies information specifically for student #2 in the database.

action: "DELETE" location: /students/2
  Method: Delete/Destroy
  Performance: Removes, destroy or delete information specifically for student #2 in the database.

5. As a developer, you are making an application to manage your to do list. Create 10 user stories that will help you get your application started. Read more about [user stories](https://www.atlassian.com/agile/project-management/user-stories).


Challenge: TO-DO LIST Management Application 

As a developer, I have been tasked with creating an application to manage my to-do list. In order to interact with the to-do list application, I should be able to see the to-do list title, see the content of any given task entries, and have the ability to create, edit, update and delete tasks and input date information for tasks. 

1. As a user of the application, I need to see the title of the to-do list.

2. As a user of the application, I need to see a list of difference task names.

3. As a user of the application, I need to be able to see a form where I can create a to-do list title for a custom category/project.

4. As a user of the application, I need to be able to see a form where I can add a new task name.

5. As a user of the application, I need to see a form where I can add a new start date (month, day, year) for a task.

6. As a user of the application, I need to see a form where I can add a deadline (month, day, year) for a task.

7. As a user of the application, I need to see a form where I can create a new task descripton.

8. As a user of the application, I need to be able to see a form where I can assign a task to someone.

9. As a user of the application, I need to be able to see a form where I can edit existing tasks.

10. As a user of the application, I need to see a form where I can update when the task is completed.


<!-- STRETCH GOALS: -->

11. As a user of the application, I need to see a form where I can delete a task.

12. As a user of the application, I need to see a form where I can create an appointment/time block for a task.

13. As a user of the application, I need to see pleasant styling. 

14. As a user of the application, I need to see a form where I can create a priority level for a task.

15. As a user of the application, I need to see a form where I can add additional comments to a task.

16. As a user of the application, I can see a box checked-off once a task has been completed.

17. As a user of the application, I can see a line that crosses out the task once it has been completed.

18. As a user of the application, I can see the color of the checked box and line crossed out change to a green color once completed.

19. As a uaer of the application, I can see the color of a task change to a red color once the deadline date has passed. 

20. As a user of the application, I can see a form where I have the option to set the to-do list to daily, weekly, monthly, etc. tasks.

21. As a user of the application, I can see a current calendar for daily, weekly, monthly, etc. tasks.

22. As a user of the application, I can see a form where I can update a task and roll it over into another or category.

23. As a user of the application, I will receive an alert three days before a deadline approaches and every day until the deadline date.

<!-- Sorry, I got a little carried away with the user stories. I just had to keep going to get all of my ideas out.  -->

