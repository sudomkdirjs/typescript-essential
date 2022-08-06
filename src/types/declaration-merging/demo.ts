// Using this declaration merging concept we can can add method to third-party librareis.

interface Customer {
  /** saves the customer somewhere */
  save(): void;
}

class Customer {} // Let's assuem this Customer class in third-party library. We can add custom method to it by Defining interface with same Same.

const customer = new Customer();
customer.save = function () {};

const myVar = window.MY_VAR;
