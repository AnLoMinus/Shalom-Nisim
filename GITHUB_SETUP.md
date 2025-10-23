# 🚀 מדריך העלאה מלא ל-GitHub

## שלב 1: הכנת המאגר המקומי

### 1.1 אתחול Git

```bash
# נווט לתיקיית הפרויקט
cd "/Users/anonymous/Desktop/📜 תכנון שיעור תורה לזכר נשמת שלום בן ויקי"

# אתחול Git
git init

# הוספת כל הקבצים
git add .

# Commit ראשון
git commit -m "Initial commit: Complete Torah lesson memorial website"
```

### 1.2 יצירת מאגר ב-GitHub

1. לך ל-[GitHub.com](https://github.com)
2. לחץ על "New repository" (כפתור ירוק)
3. שם המאגר: `Shalom-Nisim`
4. תיאור: `מאגר שיעור תורה לזכר נשמת שלום בן ויקי - אתר מקיף לבניית שיעורי תורה, דרשות ומקורות השראה רוחניים`
5. בחר "Public" (חשוב ל-GitHub Pages)
6. **אל תסמן** "Add a README file" (כבר יש לנו)
7. לחץ "Create repository"

### 1.3 חיבור למאגר

```bash
# הוספת remote
git remote add origin https://github.com/AnLoMinus/Shalom-Nisim.git

# העלאה ל-GitHub
git push -u origin main
```

---

## שלב 2: הגדרת GitHub Pages

### 2.1 הפעלת GitHub Pages

1. לך למאגר ב-GitHub
2. לחץ על "Settings" (בתפריט העליון)
3. גלול למטה ל-"Pages" (בתפריט השמאלי)
4. תחת "Source" בחר "Deploy from a branch"
5. בחר "main" branch
6. בחר "/ (root)" folder
7. לחץ "Save"

### 2.2 בדיקת הפעלה

- GitHub Pages יתחיל לעבוד תוך 2-5 דקות
- האתר יהיה זמין בכתובת: [https://anlominus.github.io/Shalom-Nisim](https://anlominus.github.io/Shalom-Nisim)
- תקבל הודעה ב-GitHub כשהאתר מוכן

---

## שלב 3: מילוי שדות Commit

### 3.1 Commit Summary (סיכום קצר)

```
Initial commit: Complete Torah lesson memorial website
```

### 3.2 Add files via upload

סמן את כל הקבצים הבאים:

- ✅ `index.html`
- ✅ `form.html`
- ✅ `planning.html`
- ✅ `sermon.html`
- ✅ `quotes.html`
- ✅ `404.html`
- ✅ `styles.css`
- ✅ `script.js`
- ✅ `package.json`
- ✅ `README.md`
- ✅ `LICENSE`
- ✅ `.gitignore`
- ✅ `DEPLOYMENT.md`
- ✅ `GIT_COMMIT_TEMPLATE.md`
- ✅ `GITHUB_SETUP.md`
- ✅ `.github/workflows/deploy.yml`

### 3.3 Optional Extended Description

```markdown
## מה נוסף:

### אתר מלא עם 5 דפים:
- דף הבית עם ניווט מלא
- טופס מיקוד עם שמירה אוטומטית
- דף תכנון מפורט
- דרשה מוכנה עם מקומות למילוי
- ליקוט ציטוטים קדושים מעשרת מאמרות הבריאה

### תכונות טכניות:
- עיצוב רספונסיבי למובייל
- שמירה אוטומטית ב-LocalStorage
- פונקציונליות הדפסה
- אנימציות חלקות
- קיצורי מקלדת (Ctrl+S, Ctrl+P)

### תוכן רוחני:
- ציטוטים מקראיים מלאים
- מקורות חז"ל וקבליים
- מסע רוחני מעשרת מאמרות הבריאה
- תפילות לעילוי נשמה

## מטרת הפרויקט:
מאגר מקיף לבניית שיעורי תורה, דרשות וטקסי זיכרון 
לזכר נשמת שלום בן ויקי ז"ל.

## טכנולוגיות:
- HTML5, CSS3, JavaScript
- GitHub Pages
- LocalStorage
- Responsive Design
```

### 3.4 Commit Options

- ✅ **Commit directly to the main branch**
- ❌ Create a new branch for this commit

---

## שלב 4: בדיקות אחרונות

### 4.1 בדיקות מקומיות

```bash
# הפעלת שרת מקומי
python -m http.server 8000
# או
npm start

# בדיקה בדפדפן
open http://localhost:8000
```

### 4.2 בדיקות פונקציונליות

- [ ] ניווט בין דפים עובד
- [ ] טופס נשמר ב-LocalStorage
- [ ] הדפסה עובדת
- [ ] עיצוב נראה טוב במובייל
- [ ] כל הקישורים עובדים

### 4.3 בדיקת GitHub Pages

1. לך לכתובת: [https://anlominus.github.io/Shalom-Nisim](https://anlominus.github.io/Shalom-Nisim)
2. בדוק שכל הדפים נטענים
3. בדוק שהעיצוב נראה נכון
4. בדוק שהפונקציונליות עובדת

---

## שלב 5: עדכונים עתידיים

### 5.1 עדכון קוד

```bash
# משיכת שינויים
git pull origin main

# הוספת שינויים
git add .
git commit -m "Update: Description of changes"
git push origin main
```

### 5.2 עדכון תוכן

```bash
# עריכת קבצים
# הוספת שינויים
git add .
git commit -m "Content: Update Hebrew text and add new quotes"
git push origin main
```

---

## 🔧 פתרון בעיות נפוצות

### בעיה: "Repository not found"

**פתרון:**

1. ודא שהכתובת נכונה
2. בדוק שיש לך הרשאות למאגר
3. נסה שוב את הפקודות

### בעיה: GitHub Pages לא עובד

**פתרון:**

1. בדוק שהמאגר הוא Public
2. ודא שהקבצים הועלו נכון
3. חכה 5-10 דקות לעדכון

### בעיה: עיצוב לא נטען

**פתרון:**

1. בדוק שהקובץ `styles.css` קיים
2. ודא שהנתיב נכון ב-HTML
3. נקה cache של הדפדפן

---

## 📞 תמיכה

אם נתקלת בבעיות:

1. בדוק את [GitHub Documentation](https://docs.github.com)
2. חפש פתרונות ב-[GitHub Community](https://github.community)
3. פתח Issue במאגר הפרויקט

---

**לזכר ולעילוי נשמת שלום בן ויקי ז"ל**
