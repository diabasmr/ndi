import pygame as py

class Game:
    def __init__(self, w, h, x, y, s):
        # dimensions
        self.w = w
        self.h = h
        self.s = s

        # snake
        self.x = x
        self.y = y
        self.dir = 'E'
        self.body = ([])
    
    def update_snake(self):
        if self.dir == 'N':
            self.y -= 1
        elif self.dir == 'S':
            self.y += 1
        elif self.dir == 'W':
            self.x -= 1
        elif self.dir == 'E':
            self.x += 1
        
        print(self.x, self.y, self.dir)

    def draw_snake(self):
        py.draw.rect(screen, 'blue', (self.x * self.s, self.y * self.s, self.s, self.s))

# game setup
w = 16 # width
h = 11 # height
s = 30 # graphic size of a box
game = Game(w, h, 0, h//2, s)

# pygame setup
py.init()
py.display.set_caption('Game Tcha Snake')
screen = py.display.set_mode((w*s, h*s))
clock = py.time.Clock()
run = True

# lancement du jeu
while run:

    # fermeture fenêtre
    for event in py.event.get():
        if event.type == py.QUIT:
            run = False

    screen.fill("black")

    # évènements
    keys = py.key.get_pressed()
    if keys[py.K_UP] and game.dir != 'S':
        game.dir = 'N'
    elif keys[py.K_DOWN] and game.dir != 'N':
        game.dir = 'S'
    elif keys[py.K_LEFT] and game.dir != 'E':
        game.dir = 'W'
    elif keys[py.K_RIGHT] and game.dir != 'W':
        game.dir = 'E'

    print(keys[py.K_UP], keys[py.K_DOWN], keys[py.K_LEFT], keys[py.K_RIGHT])
    game.update_snake()

    game.draw_snake()

    # actualisation
    py.display.flip()

    # limitation des fps
    clock.tick(8)

py.quit()