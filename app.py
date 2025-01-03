from flask import Flask, render_template, request, redirect, url_for, jsonify

app = Flask(__name__)

# Route principale (affiche le formulaire)
@app.route('/')
def index():
    return render_template('index.html')  # Le fichier HTML principal

# Route pour gérer les connexions
@app.route('/login', methods=['POST'])
def login():
    # Récupérer les données envoyées par le formulaire
    email = request.form.get('email')  # Pour le formulaire Email
    phone = request.form.get('phone')  # Pour le formulaire Téléphone
    password = request.form.get('password')

    # Vérification simple (à personnaliser selon vos besoins)
    if email or phone:
        if password == "1234":  # Un mot de passe fictif pour tester
            return jsonify({"status": "success", "message": "Connexion réussie!"})
        else:
            return jsonify({"status": "error", "message": "Mot de passe incorrect."})
    return jsonify({"status": "error", "message": "Veuillez remplir les champs requis."})

# Route d'inscription (ajustez selon vos besoins)
@app.route('/register', methods=['GET', 'POST'])
def register():
    if request.method == 'POST':
        # Traitement de l'inscription
        username = request.form.get('username')
        password = request.form.get('password')
        # Vous pouvez sauvegarder ces informations dans une base de données ici
        return jsonify({"status": "success", "message": "Inscription réussie!"})
    return render_template('register.html')  # Page d'inscription

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)
