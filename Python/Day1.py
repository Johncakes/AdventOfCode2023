
with open('input.txt', 'r') as file:

  total = 0 
  for line in file:
    input_data = line.strip()
    num_only= []
    cali_val = 0

    for ch in input_data:
      if ch.isdigit():
        num_only.append(ch)

    if len(num_only) > 1:
      cali_val = num_only[0]+num_only[-1]
    else :
      cali_val = num_only[0]+num_only[0]

    total = total +int(cali_val)

  print(total)    
