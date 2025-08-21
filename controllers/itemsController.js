const items = require("../models/itemsModel");

// add item
exports.addItemController = async (req, res) => {
  const { title, description } = req.body;
  const userId = req.payload;

  try {
    const newItem = new items({
      title,
      description,
      userId,
    });
    await newItem.save();
    res.status(200).json(newItem);
  } catch (error) {
    res.status(500).json(error);
  }
};

// get all items
exports.getAllItemsController = async (req, res) => {
  const userId = req.payload;

  try {
    const allItems = await items.find({ userId });
    res.status(200).json(allItems);
  } catch (error) {
    res.status(500).json(error);
  }
};

// get one item
exports.getOneItemController = async (req, res) => {
  const userId = req.payload;
  const { id } = req.params;

  try {
    const Item = await items.findOne({ userId, _id: id });
    res.status(200).json(Item);
  } catch (error) {
    res.status(500).json(error);
  }
};

// edit item
exports.editItemController = async (req, res) => {
  const { title, description } = req.body;
  const { id } = req.params;
  const userId = req.payload;

  try {
    const item = await items.findById(id);

    if (!item) {
      res.status(401).json("item not found");
    } else if (item.userId.toString() !== userId) {
      res.status(403).json("Not authorized to edit this item");
    } else {
      const updatedItem = await items.findByIdAndUpdate(
        { _id: id },
        { title, description },
        { new: true }
      );
      res.status(200).json(updatedItem);
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

// update status
exports.editItemstatusController = async (req, res) => {
  const { status } = req.body;
  const { id } = req.params;
  const userId = req.payload;
  try {
    const item = await items.findById(id);
    if (!item) {
      res.status(404).json("item not found");
    } else if (item.userId.toString() !== userId) {
      res.status(403).json("Not authorized to edit this item");
    } else {
      const updatedItem = await items.findByIdAndUpdate(
        { _id: id },
        { status },
        { new: true }
      );
      res.status(200).json(updatedItem);
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

// Delete item
exports.deleteItemController = async (req, res) => {
  const { id } = req.params;
   const userId = req.payload;

  try {
    const item = await items.findById(id);
    if (!item) {
      res.status(401).json("item not found");
    } 
    else if (item.userId.toString() !== userId) {
      res.status(403).json("Not authorized to edit this item");
    } 
    else {
      await items.findByIdAndDelete({ _id: id });
      res.status(200).json("delete successfully");
    }
  } catch (error) {
    res.status(500).json(error);
  }
};
