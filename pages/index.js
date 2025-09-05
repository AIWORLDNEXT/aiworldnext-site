# 1) show import lines from pages/index.js
echo ">>> Imports in pages/index.js"
sed -n '1,200p' pages/index.js

# 2) list the local import paths used on homepage (adjust if your file paths differ)
# This checks common components used by homepage
for f in components/Navbar.js components/Footer.js components/Card.js pages/_app.js; do
  if [ -f "$f" ]; then
    echo "OK: $f exists"
  else
    echo "MISSING: $f"
  fi
done

# 3) Check default export presence in each component file (very basic check)
for f in components/*.js; do
  echo "---- $f ----"
  grep -n "export default" "$f" || echo "NO default export found in $f"
done
