import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  header: {
    marginTop: 20,
    marginBottom: 15,
    backgroundColor: '#5A9CA8',
    flexDirection: 'row',
  },
  footer: {
    marginTop: 15,
    marginBottom : 20,
    backgroundColor: '#5A9CA8',
    flexDirection: 'row'
  },
  title: {
    color: '#fff',
    fontWeight: 'bold',
    flex: 1,
    fontSize: 23,
    textAlign: 'center',
    margin: 10,
  },
  author: {
    color: '#fff',
    fontWeight: 'bold',
    flex: 1,
    fontSize: 15,
    textAlign: 'center',
    margin: 10,
  },
  gameboard: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  gameinfo: {
    backgroundColor: '#fff',
    textAlign: 'center',
    justifyContent: 'center',
    fontSize: 20,
    marginTop: 10
  },
  row: {
    marginTop: 20,
    padding: 10
  },
  flex: {
    flexDirection: "row"
  },
  button: {
    margin: 30,
    flexDirection: "row",
    padding: 10,
    backgroundColor: "#73CED6",
    width: 150,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    color:"#2B2B52",
    fontSize: 20
  },
  //Scoreboard
  scoreboardContainer: {
    flex: 1,
    backgroundColor: '#f4f4f8',
    padding: 20,
  },
  scoreboardTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginVertical: 20,
  },
  scoreItem: {
    backgroundColor: '#e0e0e0',
    padding: 15,
    marginVertical: 8,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1,
  },
  scoreText: {
    fontSize: 18,
    color: '#333',
    textAlign: 'center',
  },
  scoreDate: {
    fontSize: 14,
    color: '#666',
  },
  scoreboardButtonContainer: {
    marginVertical: 20,
    alignItems: 'center',
  },
  clearScoreboardButton: {
    backgroundColor: '#ff6666',
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
    width: '50%',
  },
  clearScoreboardButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },

  //Home
  homeContainer: {
    flex: 1,
    backgroundColor: '#f4f4f8',
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  homeText: {
    fontSize: 18,
    color: '#333',
    textAlign: 'center',
    marginVertical: 10,
  },
  homeInput: {
    backgroundColor: '#fff',
    padding: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    width: '80%',
    marginVertical: 10,
  },
  homeButton: {
    backgroundColor: '#73CED6',
    padding: 10,
    borderRadius: 8,
    marginVertical: 10,
    width: '50%',
    alignItems: 'center',
  },
  homeButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  homeTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginVertical: 20,
  },
  homeRules: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginVertical: 10,
    paddingHorizontal: 10,
  },

  //Gameboard
  gameboardContainer: {
    flex: 1,
    backgroundColor: '#f4f4f8',
    padding: 20,
  },
  gameInfoText: {
    fontSize: 18,
    color: '#333',
    textAlign: 'center',
    marginVertical: 10,
  },
  statusText: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginVertical: 10,
  },
  throwButton: {
    backgroundColor: '#73CED6',
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
    alignSelf: 'center',
    width: '60%',
    marginVertical: 20,
  },
  throwButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
  },
  savePointsButton: {
    backgroundColor: '#ff6666',
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
    alignSelf: 'center',
    width: '50%',
    marginVertical: 20,
  },
  savePointsButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});