header = open("header.ts", "r").read()
student = open("student.ts", "r").read()

f = open("build.ts", "w")
f.write(header)
f.close()


f = open("build.ts", "a")
f.write(student + "\n")
f.close()