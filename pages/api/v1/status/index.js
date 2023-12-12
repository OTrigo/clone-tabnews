function status(request, response){
  response.status(200).json({mensagem: "mensagem"})
}

export default status