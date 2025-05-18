#Given string
string = "hafmeoxgsosh"


def findDupe(stir):

  #First lets create a list to store the values encounteredd
    item = []
#Next lets creat a loop to go through the string:
#The loop will contain a condtional to see of the value encounter already exists within the list
#if so, that means that its a duplicate and will be returned as the answer. Elsee it will append the character to the list
    for char in stir:
      if char in item:

        return char
      else:
        item.append(char)

    return "Item Not Found"


print(findDupe(stir=string))
