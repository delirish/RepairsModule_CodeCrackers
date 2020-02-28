Feature:Product to repair feature
  Agile story: As a User I should be able to access repairs list, search for repair, create/edit/delete a repair


@smokeTest4
Scenario:
Given User is logged in to briteErp Login Page
And User clicks to Repair module on Landing Page
And User click to Create button
And User click to ProductToRepair button
And User click to SearchMore button
And User should be able to see a list of products
And User click to Create/Edit button
And User should see grey text "Product name"
And User should be able to enter his name
And User should be able to choose a ProductType
And User should be able to enter an InternalReference
And User should be able to enter a Barecode
Then User should be able to choose a Category