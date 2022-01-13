# Finals project breakdown

## Components

- Dashboard
- Dashboard/header
- Dashboard/emoji emotion
- Dashboard/emoji emotion/ emoji selection
- Dashboard/journal entry
- Dashboard/journal entry/how are you
- Dashboard/journal entry/choices
- Dashboard/journal entry/journal entry text
- Dashboard/journal entry/confirmation

- Habits
- Habits/header
- Habits/habit tracker/habits
- Habits/add habit
- Habits/add habit/form

- Calm corner
- Calm corner/ header
- Calm corner/ breathing exercise
- Calm corner/ calm sounds
- Calm corner/ resources

- Journal
- Journal/Add entry
- Journal/add entry/how are you
- Journal/add entry/choices
- Journal/add entry/journal entry text
- Journal/add entry/confirmation
- Journal/ Prev entries
- Journal/ Prev entries/ journal view

- Therapist
- Therapist/header
- Therapist/therpist list
- Therapist/therpist list/therapist profile
- Therapist/therpist list/therapist profile/form
- Therapist/therpist list/therapist profile/form/confirmation
- Therapist/therpist list/therapist profile/form/error

- Side-bar
- buton

### Dashboard

- State:
- Props:
  journals,
  habits,
  choices
  onclick(journal),
  onclick(emoji emotion),
  clickHandler(back)
- Used by: App

### Side Bar

- State:
- Props:
  Home -> dashboard
  Journal
  Habit
  calm corner
  therapist
  onclick(state) -> send to page
- Used by: App

### Habits

- State: HabitCheck,
- Props:
  data(map of habits),
  onClick(add habit),
  onclick(check habit)
  fucntion(set false monday)
  clickHandler(back)
  used by:

### Calm corner

- State:
- Props:
  clickHandler()
- Used by:

### Journal

- State:
- Props:
  journalList Item(map)
  clickHandler(add entry)
  clickHandler(view journal)
  clickHandler(back)
  choices(map)
- Used by:

### Therapists

- State:
- Props:
  Therapists (map)
  clickHandler(view therapist)
  clickHandler(book therapist)
  clickHandler(send booking request)
  clickHandler(back)
- Used by:

message(")
onConfirm(f)
onCancel(f)

<!--
message(")
onConfirm(f)
onCancel(f)
days([])'holds the objects that have the day information,
day(")'currently selected day',
setDay(f)'sets the current day' -->

KEY:
" = string

# = number

b = boolean
f = function
[] = array
