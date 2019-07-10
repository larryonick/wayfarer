exports.index = (req, res, next) => {
  res.json({ message: "This is home!" });
};

exports.trips = (req, res, next) => {
  res.json({ message: "Showing all trips!" });
};

exports.bookings = (req, res, next) => {
  res.json({ message: "Showing all bookings!" });
};

exports.user_bookings = (req, res, next) => {
  res.json({ message: "Showing all  bookings by " + req.params.username });
};

exports.users = (req, res, next) => {
  res.json({ message: "Sign In" });
};

exports.signin = (req, res, next) => {
  res.json({ message: "Sign In" });
};

exports.signup = (req, res, next) => {
  res.json({ message: "Sign Up " });
};
