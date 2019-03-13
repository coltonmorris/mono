package main

import (
	"fmt"
	lms "github.com/coltonmorris/mono/projects/flatbuffers/LMS"
	flatbuffers "github.com/google/flatbuffers/go"
)

func main() {
	fmt.Println("vim-go")

	// In order to start, we need to create an instance of the FlatBufferBuilder, which will contain the buffer as it grows. You can pass an initial size of the buffer (here 1024 bytes), which will grow automatically if needed
	builder := flatbuffers.NewBuilder(1024)

	// create the first list
	lms.ListStart(builder)
	lms.ListAddListId(builder, builder.CreateString("1"))
	lms.ListAddOrgId(builder, builder.CreateString("1"))
	lms.ListAddRegionId(builder, builder.CreateString("1"))

	lms.ListAddName(builder, builder.CreateString("first list"))
	lms.ListAddDeleted(builder, false)
	lms.ListStartLabelsVector(builder, 3)
	for i := 0; i <= 2; i++ {
		str := builder.CreateString(string(i))
		builder.PrependUOffsetT(str)
	}
	labels := builder.EndVector(3)

	lms.ListAddLabels(builder, labels)

	list := lms.ListEnd(builder)

	// Call `Finish()` to instruct the builder that this list is complete.
	builder.Finish(list)

	// The buffer is now ready to be stored somewhere, sent over the network, be compressed, or whatever you'd like to do with it. You can access the buffer like so:
	buf := builder.FinishedBytes()

	// Now you can write the bytes to a file, send them over the network.. Make sure your file mode (or tranfer protocol) is set to BINARY, not text. If you transfer a FlatBuffer in text mode, the buffer will be corrupted, which will lead to hard to find problems when you read the buffer.
}
