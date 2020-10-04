from app import app
from flask import render_template, request, jsonify
import json

messages = []

@app.route('/index') #url + методы запроса
def index(): #функция, которая выполняется при переходе пользователя по пути, указанном в декораторе
  # name1 = ''
  # name2 = ''
  # if request.method == 'POST':
  #   name1 = request.form['Fname']
  #   name2 = request.form['Sname']
  #   print(name1, name2)
   
  return render_template("index.html") #, Fname=name1, Sname=name2) #отрисовка шаблона

@app.route('/add_message', methods=['POST'])
def add_message():

  if request.method == 'POST':
    num1 = request.form['1st_number']
    num2 = request.form['2nd_number']
    print(num1, num2)

    result = num1 + ' ' + num2
    print(result)

    return jsonify({'result' : result})
  # позволяет совершать отправку json на клиент
    


    # _____ низкоуровщина
    # data = {'result' : result}

    # response = app.response_class(
    #     response=json.dumps(data),
    #     status=200,
    #     mimetype='application/json'
    # )
    # return response
    









