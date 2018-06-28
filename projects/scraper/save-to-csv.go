package main

import (
	"bufio"
	"encoding/csv"
	// "path/filepath"
	"fmt"
	"log"
	// "io"
	"os"
)

func savePhraseToCsv(phrase *Phrase) {
	fmt.Println("Saving phrase...")

	filename := "projects/scraper/data.csv"
	fields := []string{"word", "difficulty", "category"}

	// create a csv writer. create the file with headers if it doesn't exist.
	var w *csv.Writer
	if _, err := os.Stat(filename); os.IsNotExist(err) {
		fmt.Println("CSV file did not exist. Creating it...")

		// touch file
		newFile, err := os.Create(filename)
		defer newFile.Close()
		if err != nil {
			fmt.Println("Error creating new file:", err)
		}

		w = csv.NewWriter(bufio.NewWriter(newFile))

		err = w.Write(fields)
		if err != nil {
			log.Fatalln("error writing record to csv:", err)
		}
	} else {
		file, err := os.OpenFile(filename, os.O_APPEND|os.O_WRONLY, os.ModeAppend)
		defer file.Close()
		if err != nil {
			fmt.Println("Error opening file for CSV:", err)
		}
		w = csv.NewWriter(bufio.NewWriter(file))
	}

	record := []string{phrase.word, phrase.difficulty, phrase.category}

	err := w.Write(record)
	if err != nil {
		log.Fatalln("error writing record to csv:", err)
	}

	fmt.Println(record)
	w.Flush() // Write any buffered data to the underlying writer (standard output).

	fmt.Println("flushed")
	if err := w.Error(); err != nil {
		log.Fatal("yup: ", err)
	}
}
