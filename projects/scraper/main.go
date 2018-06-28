package main

import (
	"fmt"
)

func main() {
	fmt.Println("main")

	resultPhrase := GetGameGal()

	savePhraseToCsv(resultPhrase)
}
