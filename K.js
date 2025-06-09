function toggleDropdown() {
    const dropdown = document.getElementById("dropdownMenu");
    dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
  }

  // Optional: Hide dropdown when clicking outside
  window.onclick = function(event) {
    if (!event.target.matches('.more-btn')) {
      const dropdown = document.getElementById("dropdownMenu");
      if (dropdown && dropdown.style.display === "block") {
        dropdown.style.display = "none";
      }
    }
  }
// On login success
const token = jwt.sign({ userId }, 'secretKey', { expiresIn: '7d' }); // token valid for 7 days
res.cookie('auth_token', token, {
  httpOnly: true,
  secure: true,
  maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
});
res.send({ message: "Logged in successfully" });

// Middleware to check token on each request
function authenticate(req, res, next) {
  const token = req.cookies.auth_token;
  if (!token) return res.status(401).send("Not authenticated");
  
  try {
    const payload = jwt.verify(token, 'secretKey');
    req.user = payload;
    next();
  } catch {
    res.status(401).send("Invalid token");
  }
}
