total = 0 
number_words = {"one":"1","two":"2","three":"3","four":"4","five":"5","six":"6","seven":"7","eight":"8","nine":"9"}

with open('input.txt', 'r') as file:

  for line in file:
    input_data = line.strip()
    word_num_index = {} 
    num_only= []
    cali_val = 0

    #Searching through the line index by index
    for x in range(len(input_data)):
      if input_data[x].isdigit():
        num_only.append(input_data[x])
      else:
        for num in number_words:
          if len(num)+x <= len(input_data): #Checking if it goes over the string index
            if input_data[x:x+len(num)] == num:
              num_only.append(number_words[num])

    #print("numOnly : ", num_only)
    if len(num_only) > 1:
      cali_val = num_only[0]+num_only[-1]
    else :
      cali_val = num_only[0]+num_only[0]

    #print(cali_val+"\n")
    total = total +int(cali_val)

  print(total)    

