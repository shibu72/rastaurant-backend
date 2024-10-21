import itemServices from "./items.service.js";


const postItem = async (req, res, next) => {
    try {
      const result = await itemServices.postItem(req.body);
      res.status(200).json({
        message: "item created successfully",
        success: true,
        data: result,
      });
    } catch (error) {
      next(error);
    }
  };

  const getItem = async (req, res, next) => {
    try {
      const result = await itemServices.getItem(req.params.id);
      res.status(200).json({
        message: "item retrieved successfully",
        success: true,
        data: result,
      });
    } catch (error) {
      next(error);
    }
  };

  const getAllItems = async (req, res, next) => {
    try {
      const result = await itemServices.getAllItems();
      res.status(200).json({
        message: "all items retrieved successfully",
        success: true,
        data: result,
      });
    } catch (error) {
      next(error);
    }
  };

  const deleteItem = async (req, res, next) => {
    try {
      const result = await itemServices.deleteItem(req.params.id);
      res.status(200).json({
        message: "item deleted successfully",
        success: true,
        data: result,
      });
    } catch (error) {
      next(error);
    }
  };

  const updateItem = async (req, res, next) => {
    try {
      const result = await itemServices.updateItem(req.params.id, req.body);
      res.status(200).json({
        message: "item updated successfully",
        success: true,
        data: result,
      });
    } catch (error) {
      next(error);
    }
  };

  const itemsController = {
    postItem,
    getItem,
    getAllItems,
    updateItem,
    deleteItem
  }

  export default itemsController;