import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar } from '@/components/ui/calendar';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());

  const pizzaMenu = [
    {
      name: 'Маргарита',
      description: 'Томатный соус, моцарелла, базилик',
      price: '450 ₽',
      icon: 'Pizza'
    },
    {
      name: 'Пепперони',
      description: 'Томатный соус, моцарелла, пепперони',
      price: '520 ₽',
      icon: 'Pizza'
    },
    {
      name: 'Четыре сыра',
      description: 'Моцарелла, горгонзола, пармезан, дор блю',
      price: '580 ₽',
      icon: 'Pizza'
    },
    {
      name: 'Детская',
      description: 'Томатный соус, моцарелла, ветчина, кукуруза',
      price: '400 ₽',
      icon: 'Pizza'
    }
  ];

  const events = [
    {
      title: 'Мастер-класс по пицце',
      date: '25 ноября',
      time: '14:00',
      age: '6-12 лет',
      icon: 'ChefHat'
    },
    {
      title: 'День рождения под ключ',
      date: '27 ноября',
      time: '16:00',
      age: 'Любой возраст',
      icon: 'PartyPopper'
    },
    {
      title: 'Семейный кулинарный вечер',
      date: '30 ноября',
      time: '18:00',
      age: 'Для всей семьи',
      icon: 'Users'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-border">
        <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Pizza" size={32} className="text-primary" />
            <span className="text-2xl font-heading font-bold text-primary">ПиццаПарк</span>
          </div>
          <div className="hidden md:flex gap-6">
            <a href="#home" className="text-foreground hover:text-primary transition-colors">Главная</a>
            <a href="#menu" className="text-foreground hover:text-primary transition-colors">Меню</a>
            <a href="#events" className="text-foreground hover:text-primary transition-colors">Мероприятия</a>
          </div>
          <Button>
            Забронировать
          </Button>
        </nav>
      </header>

      <section id="home" className="relative py-20 md:py-32 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-5xl md:text-6xl font-heading font-bold text-foreground mb-6 leading-tight">
                Играй, готовь, наслаждайся! 🍕
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Уникальная площадка, где дети играют на свежем воздухе и учатся готовить настоящую итальянскую пиццу в дровяной печи
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="text-lg">
                  <Icon name="Calendar" className="mr-2" size={20} />
                  Забронировать место
                </Button>
                <Button size="lg" variant="outline" className="text-lg">
                  <Icon name="Phone" className="mr-2" size={20} />
                  Позвонить
                </Button>
              </div>
            </div>
            <div className="animate-scale-in">
              <img 
                src="https://cdn.poehali.dev/projects/5774f48e-3700-4e2e-87f1-1da35df9df4c/files/589f3bf8-0652-4098-82ad-db66b5468147.jpg"
                alt="Уютная площадка для игр и приготовления пиццы"
                className="rounded-3xl shadow-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-accent">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center border-2 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-4">
                  <Icon name="Users" size={32} className="text-primary-foreground" />
                </div>
                <CardTitle className="font-heading">Игровая зона</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Безопасная площадка с горками, качелями и игровыми домиками для активного отдыха
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-2 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-4">
                  <Icon name="ChefHat" size={32} className="text-primary-foreground" />
                </div>
                <CardTitle className="font-heading">Кулинарная студия</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Учим детей готовить пиццу с профессиональным шеф-поваром в настоящей дровяной печи
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-2 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-4">
                  <Icon name="PartyPopper" size={32} className="text-primary-foreground" />
                </div>
                <CardTitle className="font-heading">Праздники</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Организуем незабываемые дни рождения и семейные праздники под ключ
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="menu" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
              Наше меню
            </h2>
            <p className="text-xl text-muted-foreground">
              Все пиццы готовятся из свежих ингредиентов в дровяной печи
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {pizzaMenu.map((pizza, index) => (
              <Card key={index} className="hover:shadow-xl transition-all hover:-translate-y-1">
                <CardHeader>
                  <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mb-3">
                    <Icon name={pizza.icon} size={24} className="text-primary" />
                  </div>
                  <CardTitle className="font-heading">{pizza.name}</CardTitle>
                  <CardDescription>{pizza.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold text-primary">{pizza.price}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="rounded-3xl overflow-hidden shadow-2xl">
            <img 
              src="https://cdn.poehali.dev/projects/5774f48e-3700-4e2e-87f1-1da35df9df4c/files/19475dc6-fa82-42d8-be26-fdf95f1c888e.jpg"
              alt="Вкусная домашняя пицца"
              className="w-full h-96 object-cover"
            />
          </div>
        </div>
      </section>

      <section id="events" className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
              Календарь мероприятий
            </h2>
            <p className="text-xl text-muted-foreground">
              Мастер-классы, праздники и семейные вечера
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              {events.map((event, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                        <Icon name={event.icon} size={24} className="text-primary-foreground" />
                      </div>
                      <div>
                        <CardTitle className="font-heading mb-2">{event.title}</CardTitle>
                        <CardDescription className="space-y-1">
                          <div className="flex items-center gap-2">
                            <Icon name="Calendar" size={16} />
                            <span>{event.date}, {event.time}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Icon name="User" size={16} />
                            <span>{event.age}</span>
                          </div>
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <Button className="w-full">Записаться</Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="lg:sticky lg:top-24">
              <Card>
                <CardHeader>
                  <CardTitle className="font-heading">Выберите дату</CardTitle>
                  <CardDescription>Посмотрите доступные даты для посещения</CardDescription>
                </CardHeader>
                <CardContent className="flex justify-center">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    className="rounded-md"
                  />
                </CardContent>
              </Card>

              <Card className="mt-6">
                <CardHeader>
                  <CardTitle className="font-heading">Для детских праздников</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <img 
                    src="https://cdn.poehali.dev/projects/5774f48e-3700-4e2e-87f1-1da35df9df4c/files/f9e05b16-ef1c-43d5-ae59-862f5a39d937.jpg"
                    alt="Дети готовят пиццу"
                    className="rounded-xl w-full"
                  />
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <Icon name="Check" size={20} className="text-primary" />
                      <span>Мастер-класс от шеф-повара</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Icon name="Check" size={20} className="text-primary" />
                      <span>Аниматоры и игры</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Icon name="Check" size={20} className="text-primary" />
                      <span>Украшение зала</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Icon name="Check" size={20} className="text-primary" />
                      <span>Именинная пицца в подарок</span>
                    </li>
                  </ul>
                  <Button className="w-full" size="lg">Заказать праздник</Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-foreground text-background py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Pizza" size={32} className="text-primary" />
                <span className="text-2xl font-heading font-bold">ПиццаПарк</span>
              </div>
              <p className="text-background/80">
                Место, где дети играют и учатся готовить с удовольствием
              </p>
            </div>
            <div>
              <h3 className="font-heading font-bold mb-4 text-lg">Контакты</h3>
              <ul className="space-y-2 text-background/80">
                <li className="flex items-center gap-2">
                  <Icon name="Phone" size={18} />
                  <span>+7 (900) 123-45-67</span>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Mail" size={18} />
                  <span>info@pizzapark.ru</span>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="MapPin" size={18} />
                  <span>г. Москва, ул. Солнечная, 15</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-heading font-bold mb-4 text-lg">Режим работы</h3>
              <ul className="space-y-2 text-background/80">
                <li>Пн-Пт: 10:00 - 20:00</li>
                <li>Сб-Вс: 10:00 - 22:00</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-background/20 mt-8 pt-8 text-center text-background/60">
            <p>© 2024 ПиццаПарк. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
