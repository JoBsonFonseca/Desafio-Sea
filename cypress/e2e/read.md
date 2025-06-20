# Cenário de Teste - Cadastro de Funcionário

---

## Funcionalidade: Cadastro de Funcionário

### Cenário: Cadastro com sucesso

**Passos:**

1. O usuário acessa a página inicial do sistema.
2. O usuário clica no botão "Cadastrar Trabalhador" para abrir o formulário de cadastro.
3. O usuário preenche o campo **Nome** com um nome válido (ex: Giovana Alves).
4. O usuário preenche o campo **CPF** com um CPF válido (ex: 12345678910).
5. O usuário preenche o campo **Data de Nascimento** com uma data válida no formato `YYYY-MM-DD` (ex: 2000-06-23).
6. O usuário preenche o campo **RG** com um número válido (ex: 123456).
7. O usuário marca o checkbox **"O trabalhador não usa EPI"**.
8. O usuário verifica que o botão **Salvar** está visível.
9. O usuário clica no botão **Salvar** para finalizar o cadastro.

---

### Resultado esperado:

- O sistema deve salvar o cadastro com sucesso e confirmar a operação (ex: mensagem de sucesso ou redirecionamento).

---

### Observações Técnicas:

- Os campos Nome, CPF, Data de Nascimento e RG são obrigatórios para o cadastro.
- O checkbox "O trabalhador não usa EPI" pode ser marcado conforme regra de negócio.
- O botão Salvar deve estar visível e habilitado para envio.

---


---
##  Funcionalidade: Adicionar Outra Atividade

###  Cenário: Falha na tentativa de adicionar outra atividade

**Passos:**
1. O usuário acessa a página de adicionar funcionário.
2. O usuário clica no botão "Ativo e Inativo" e seleciona a opção **ATIVO**.
3. O usuário preenche o campo **"Nome"**.
4. O usuário preenche o campo **"CPF"** com um CPF válido.
5. O usuário preenche o campo **"Data de nascimento"** com uma data válida.
6. O usuário preenche o campo **"RG"** com um RG válido.
7. O usuário seleciona o **cargo**.
8. O usuário seleciona a **atividade**.
9. O usuário seleciona o **EPI**.
10. O usuário informa o número de **CA**.
11. O usuário clica no botão **"Adicionar Outra Atividade"**.

**Resultado Esperado:**  
 Deve ser aberto uma nova seção para adicionar uma nova atividade.

**Regra de Negócio:**  
- **Nome, CPF, Data de Nascimento, RG e CA** são campos obrigatórios para adicionar outra atividade.