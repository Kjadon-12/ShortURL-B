# uniacco Backend Assignment 1


#Mention what the database schema would look like
#a. Database Schema is in the model>Site.js 


#Which database would you use (mysql, mongodb) and why?
#b. I will use MongoDb because MongoDB provides a flexible developer interface for teams that are building applications that don’t need all of the safety features offered by relational systems. A common example of such an application is a web application that doesn't depend on structured schemas; it can easily serve unstructured, semi-structured, or structured data, all from the same MongoDB collection.
With MongoDB, there are more dynamic options for updating the schema of a collection, such as creating new fields based on an aggregation pipeline or updating nested array fields. This benefit is particularly important as databases grow in size. In contrast, larger MySQL databases are slower to migrate schemas and stored procedures that can be dependent on the updated schemas. MongoDB’s flexible design makes this much less of a concern.


#How long would the urls last
#c.If the connection is established with databse till then urls would be live.


#Would they expire? If yes, then why and how?
#d.Yes urls will expire if database is not connected.

#How will you ensure the links’ availability, how’ll you ensure that the system can handle very high traffic
#e. 
