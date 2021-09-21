Lógica dos testes da página de Login

input email "Testa se existi um input de email" tem que existir no documento um elemento data-testid="email-input" do tipo input

input senha "Testa se existir um input de senha" tem que existir no documento um elemento data-testid="password-input" do tipo input

button entrar "Testar se exist um botão" = tem que existir no documento um elemento data-testid="login-submit-btn" do tipo button

butto entrar "testa se quando a pagina de login for renderizada,se o botão está desabilitado"
tem que existir no documento um elemento data-testid="login-submit-btn" do tipo button = desabilitado

button entrar "Testa se o botão é ativado após receber um email e senha válidos" tem que existir no documento um elemento data-testid="login-submit-btn" do tipo button = desabilitado


rout "Testa se a rota do login é o / " history = /

"testa se o email é valido " botão desabilitado
"testa se a senha atende aos critérios " botão desabilitado
"testa se o usuario digitou apenas o email" botão desabilitado
"testa se o usuario digitou apenas a senha " botão desabilitado
