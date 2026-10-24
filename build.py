"""Rebuild index.html from src/template.html and src/art.js."""
from pathlib import Path
root = Path(__file__).parent
html = (root / "src/template.html").read_text(encoding="utf-8")
art = (root / "src/art.js").read_text(encoding="utf-8")
(root / "index.html").write_text(html.replace("/*ART*/", art), encoding="utf-8")
print("Built index.html")
