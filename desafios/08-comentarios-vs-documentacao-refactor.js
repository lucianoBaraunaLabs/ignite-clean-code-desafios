// Essa função tem o objetivo de registrar um novo usuário no banco.
async function registerInDataBase(data) {
  const { email, name, avatar } = data

  const isEmpytAvatar = !avatar
  const isEmptyName = !name

  if (isEmpytAvatar) return { error: 'avatar is required' }

  if(isEmptyName) return { error: 'name is required' }

  const isUserEmailInUse = getUserByEmail(email)

  if (isUserEmailInUse) {
    return { error: 'email already used' }
  }

  // Essa função realiza a conversão das imagens para JPG a fim de evitar erros de incompatibilidade.
  // Mais informações na issue https://github.com/rocketseat-education/example-repository/issues/1
  const avatarConvertedToJpg = convertImageToJPG(avatar)

  const userCreated = await createUser({ email, name, avatar: avatarConvertedToJpg })

  return { user: userCreated }
}