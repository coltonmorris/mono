// Code generated by the FlatBuffers compiler. DO NOT EDIT.

package LMS

import (
	flatbuffers "github.com/google/flatbuffers/go"
)

type Record struct {
	_tab flatbuffers.Table
}

func GetRootAsRecord(buf []byte, offset flatbuffers.UOffsetT) *Record {
	n := flatbuffers.GetUOffsetT(buf[offset:])
	x := &Record{}
	x.Init(buf, n+offset)
	return x
}

func (rcv *Record) Init(buf []byte, i flatbuffers.UOffsetT) {
	rcv._tab.Bytes = buf
	rcv._tab.Pos = i
}

func (rcv *Record) Table() flatbuffers.Table {
	return rcv._tab
}

func (rcv *Record) Fields(obj *RecordField, j int) bool {
	o := flatbuffers.UOffsetT(rcv._tab.Offset(4))
	if o != 0 {
		x := rcv._tab.Vector(o)
		x += flatbuffers.UOffsetT(j) * 4
		x = rcv._tab.Indirect(x)
		obj.Init(rcv._tab.Bytes, x)
		return true
	}
	return false
}

func (rcv *Record) FieldsLength() int {
	o := flatbuffers.UOffsetT(rcv._tab.Offset(4))
	if o != 0 {
		return rcv._tab.VectorLen(o)
	}
	return 0
}

func RecordStart(builder *flatbuffers.Builder) {
	builder.StartObject(1)
}
func RecordAddFields(builder *flatbuffers.Builder, fields flatbuffers.UOffsetT) {
	builder.PrependUOffsetTSlot(0, flatbuffers.UOffsetT(fields), 0)
}
func RecordStartFieldsVector(builder *flatbuffers.Builder, numElems int) flatbuffers.UOffsetT {
	return builder.StartVector(4, numElems, 4)
}
func RecordEnd(builder *flatbuffers.Builder) flatbuffers.UOffsetT {
	return builder.EndObject()
}
