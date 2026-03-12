
import sys
import mimetypes

file=sys.argv[1]

type=mimetypes.guess_type(file)

print(type)
