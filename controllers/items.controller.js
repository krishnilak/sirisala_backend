const Item = require("../models/items.model.js");

// Create and Save a new Item
exports.create = (req, res) => {
    // Validate request
    if (!req.body) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
    }
  
    // Create a Item
    const item = new Item({
      item_id: req.body.item_id,
      item_name: req.body.item_name,
      item_desc: req.body.item_desc,
      item_price: req.body.item_price,
      item_quantity: req.body.item_quantity,
      includes: req.body.includes,
      item_image_url: req.body.item_image_url
    });
  
    // Save Item in the database
    Item.create(item, (err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Item."
        });
      else res.send(data);
    });
  };

// Retrieve all Item from the database (with condition).
// Retrieve all Item from the database (with condition).
exports.findAll = (req, res) => {
    const item_id = req.query.item_id;
  
    Item.getAll(item_id, (err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving Item."
        });
      else res.send(data);
    });
  };

// Find a single Item with a id
exports.findOne = (req, res) => {
  Item.findById(req.params.id, (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Item with id ${req.params.id}.`
          });
        } else {
          res.status(500).send({
            message: "Error retrieving Item with id " + req.params.id
          });
        }
      } else res.send(data);
    });
  };

//   exports.findAllPublished = (req, res) => {
//     Item.getAllPublished((err, data) => {
//       if (err)
//         res.status(500).send({
//           message:
//             err.message || "Some error occurred while retrieving item."
//         });
//       else res.send(data);
//     });
//   };

// // Update a Item identified by the id in the request
// exports.update = (req, res) => {
//     // Validate Request
//     if (!req.body) {
//       res.status(400).send({
//         message: "Content can not be empty!"
//       });
//     }
  
//     console.log(req.body);
  
//     Item.updateById(
//       req.params.id,
//       new Item(req.body),
//       (err, data) => {
//         if (err) {
//           if (err.kind === "not_found") {
//             res.status(404).send({
//               message: `Not found Item with id ${req.params.id}.`
//             });
//           } else {
//             res.status(500).send({
//               message: "Error updating Item with id " + req.params.id
//             });
//           }
//         } else res.send(data);
//       }
//     );
//   };

// // Delete a Item with the specified id in the request
// exports.delete = (req, res) => {
//   Item.remove(req.params.id, (err, data) => {
//       if (err) {
//         if (err.kind === "not_found") {
//           res.status(404).send({
//             message: `Not found Item with id ${req.params.id}.`
//           });
//         } else {
//           res.status(500).send({
//             message: "Could not delete Item with id " + req.params.id
//           });
//         }
//       } else res.send({ message: `Item was deleted successfully!` });
//     });
//   };

// // Delete all Item from the database.
// exports.deleteAll = (req, res) => {
//   Item.removeAll((err, data) => {
//       if (err)
//         res.status(500).send({
//           message:
//             err.message || "Some error occurred while removing all items."
//         });
//       else res.send({ message: `All Item were deleted successfully!` });
//     });
//   };