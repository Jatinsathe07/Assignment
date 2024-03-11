1. Explain the relationship between the "Product" and "Product_Category" entities from the above diagram.

Answer - A one-to-one relationship is a relationship that two entities have. One acts as the parent, and the other as the child. For the parent, each instance of may have an association with up to one instance of the child entity. For the child, each instance must be associated with exactly one parent.


3. How could you ensure that each product in the "Product" table has a valid category assigned to it.
  
Answer- Managing products is not simply about maintaining a list of products. You also have to manage the category, inventory, discount, and other attributes of the products. So always focus on simplifying the data structure while reducing duplicates. In the following table structure, the main product table contains information about the products.
