# Google-Books-Search

Google Books Search is an app that allows the user to search for a book from the Google Books API, access the books' data from a link provided, and save/delete books from a saved books menu.

This is a full-stack application that utilizes React.js for the front end website and a Mongo database stored on a Heroku server.

Please see the raw data files on GitHub for a detailed look at how each component functions.

## Getting Started

Google-Books-Search is deployed via Heroku.  A direct link for the Heroku can be found here:  https://jl2cgoogle-books-search.herokuapp.com/

Files and other information can be found on GitHub here: https://github.com/JoeLearns2Code/google-books-search

If you wish to deploy locally, please see the Prerequisites and Installing sections below.  Otherwise, you can access the program from the Heroku link.

## Instructions

Upon clicking on the link, the user will be taken to the Search page.  Enter a title in the input field, click on the Search button, and view the results below.  

Each result populates with a View and Save button.  View will take you to a Google search entry with more information about the book.  Save will the add the book to the Saved page menu.  

The Saved page displays all books you have saved from the Search page.  Each entry will have a View and Delete button.  View behaves in the same way as described above.  Delete removes the book from the saved page.


### Prerequisites

The data can be pulled directly from GitHub via GitBash on PC or via Terminal on Mac.  If you are new to this process, please follow the directions below:

When you have accessed the repository page on GitHub, you may simply download a Zip file and extract it to a directory of your choosing.  Alternatively, you may download the data directly to your device via GitBash if you have an SSH key.  More on adding an SSH key can be found here: https://help.github.com/en/enterprise/2.15/user/articles/adding-a-new-ssh-key-to-your-github-account


### Installing

Once you have the repository cloned, you will also need to have the basic npm package library installed.  Simply type "npm install" in the console when you are within the main folder.  

The following npm packages are utilized for deploying the MongoDB server:

npm express
npm mongoose


## Testing

HTML files can be validated here: https://validator.w3.org/#validate_by_input

If you are using Chrome as your browser, React elements(props, states, etc.) can be viewed by installing the following extension: https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en 


## Deployment

Navigate to https://github.com/ to clone.  Carefully follow the installation instructions above to deploy locally.


## Built With

Visual Studio Code: https://code.visualstudio.com/
React.js: https://reactjs.org/
Node.js: https://nodejs.org/en/  
Heroku: https://dashboard.heroku.com 


## Contributing

Feel free to fork the repository for your own study.  


## Versioning

Use github for version control (https://github.com/your/project/tags).


## Authors

* **Joe Hutchinson**

## License

This project is not licensed.

## Acknowledgments

* Joe Rehfuss
* Trae Shanks
* Lan Truong
* Abdul Aziz

Thank you to my instructor & TA's.