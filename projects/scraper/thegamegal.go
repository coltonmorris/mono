package main

import (
	"fmt"
)

import "github.com/gocolly/colly"

func GetGameGal() *Phrase {
	cnts := make(chan *Phrase)

	c := colly.NewCollector(
		colly.AllowURLRevisit(),
		colly.IgnoreRobotsTxt(),
	)
	c.OnRequest(func(r *colly.Request) {
		// fmt.Println("Visiting", r.URL)
	})

	c.OnError(func(_ *colly.Response, err error) {
		fmt.Println("Something went wrong:", err)
	})

	c.OnHTML("#newword-button", func(e *colly.HTMLElement) {
		c := e.Text
		fmt.Println("returning result: ", c)
		cnts <- &Phrase{
			word:       c,
			difficulty: "hard"}
	})

	c.OnRequest(func(r *colly.Request) {
		r.Headers.Set("User-Agent", RandomString())
	})

	addrPath := "https://www.thegamegal.com/word-generator/"
	go c.Visit(addrPath)

	q := <-cnts
	return q
}
