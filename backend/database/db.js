//------------------------------------------------------------  Connection DB  ------------------------------------------------------------
var url = "mongodb+srv://Mathieu:J0uec581OeHWuz8j@cluster0.3dozm.mongodb.net/Testing?retryWrites=true&w=majority" //URL de la base de données


const connection = mongoose.connect(url,
    { 
      useNewUrlParser: true,
      useUnifiedTopology: true })
          .then(() => console.log('Connexion à MongoDB réussie !'))
          .catch(() => console.log('Connexion à MongoDB échouée !'));

module.exports = connection