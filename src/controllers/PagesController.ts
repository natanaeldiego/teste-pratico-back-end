import { Request, Response } from 'express';

export default class PagesController {
  async index(request: Request, response: Response) {
    let pages = [
    {"title": "Home", "icon": "home", "url": "page://home", "content": [
        { "type": "post", "title": "Mensagens do Presidente", "properties": {"categories": ["messages"]} },
        { "type": "post", "title": "Notícias", "properties": {"categories": ["news"]} },
        { "type": "post", "title": "Horas e serviços", "properties": {"categories": ["schedules", "services"]} },
        { "type": "post", "title": "Taxas e Tarifários", "properties": { "categories": ["taxes"] } }
      ] },
    {
      "title": "Camara", "icon": "university", "url": "page://camera",
      "content": [
        { "type": "post", "title": "Mensagens do Presidente", "properties": {"categories": ["messages"]} },
        { "type": "post", "title": "Notícias", "properties": {"categories": ["news"]} },
        { "type": "post", "title": "Horas e serviços", "properties": {"categories": ["schedules", "services"]} },
        { "type": "post", "title": "Taxas e Tarifários", "properties": { "categories": ["taxes"] } }
      ]
    },
    {
      "title": "Comunicar", "icon": "comment", "url": "page://comunicar",
    "content": [
        { "type": "post", "title": "Mensagens do Presidente", "properties": {"categories": ["messages"]} },
        { "type": "post", "title": "Notícias", "properties": {"categories": ["news"]} },
        { "type": "post", "title": "Horas e serviços", "properties": {"categories": ["schedules", "services"]} },
        { "type": "post", "title": "Taxas e Tarifários", "properties": { "categories": ["taxes"] } }
      ]
    },
    {
      "title": "Proteção civil", "icon": "exclamation-triangle", "url": "page://protecao-civil",
      "content": [
        { "type": "post", "title": "Mensagens do Presidente", "properties": {"categories": ["messages"]} },
        { "type": "post", "title": "Notícias", "properties": {"categories": ["news"]} },
        { "type": "post", "title": "Horas e serviços", "properties": {"categories": ["schedules", "services"]} },
        { "type": "post", "title": "Taxas e Tarifários", "properties": { "categories": ["taxes"] } }
      ]
    },
    {
      "title": "Covid", "icon": "healing", "url": "page://covid",
      "content": [
        { "type": "post", "title": "Mensagens do Presidente", "properties": {"categories": ["messages"]} },
        { "type": "post", "title": "Notícias", "properties": {"categories": ["news"]} },
        { "type": "post", "title": "Horas e serviços", "properties": {"categories": ["schedules", "services"]} },
        { "type": "post", "title": "Taxas e Tarifários", "properties": { "categories": ["taxes"] } }
      ]
    }, 
    {
      "title": "Agenda", "icon": "today", "url": "page://agenda",
      "content": [
        { "type": "post", "title": "Mensagens do Presidente", "properties": {"categories": ["messages"]} },
        { "type": "post", "title": "Notícias", "properties": {"categories": ["news"]} },
        { "type": "post", "title": "Horas e serviços", "properties": {"categories": ["schedules", "services"]} },
        { "type": "post", "title": "Taxas e Tarifários", "properties": { "categories": ["taxes"] } }
      ]
    }
  ]

    return response.json(pages);
  }
}