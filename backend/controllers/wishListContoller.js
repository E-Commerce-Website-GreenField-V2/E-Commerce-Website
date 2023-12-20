const User = require("../database/models/userModel.js");
const wishList = require("../database/models/wishListModel.js");

const addToWishList = async (req, res) => {
  const { id } = req.user;
  const { prodId } = req.body;
  try {
    const user = User.findById(id);
    const alreadyAdded = user.wishList.find((id) => id.toString() === prodId);
    if (alreadyAdded) {
      let user = await User.findByIdAndUpdate(
        id,
        {
          $push: { wishList: prodId },
        },
        {
          new: true,
        }
      );
      res.json(user);
    } else {
    }
  } catch (err) {
    throw new Error(err);
  }
};
module.exports = {
  addToWishList,
};
