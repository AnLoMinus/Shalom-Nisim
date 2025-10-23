# 🚀 מדריך העלאה ל-GitHub Pages

## שלב 1: הכנת הפרויקט

### 1.1 יצירת מאגר GitHub

1. לך ל-[GitHub](https://github.com) ויצור מאגר חדש
2. שם המאגר: `Shalom-Nisim`
3. בחר "Public" כדי לאפשר GitHub Pages
4. הוסף README.md (אופציונלי)

### 1.2 העלאת הקבצים

```bash
# אתחול Git
git init

# הוספת כל הקבצים
git add .

# Commit ראשון
git commit -m "Initial commit: Torah lesson memorial website"

# הוספת remote
git remote add origin https://github.com/AnLoMinus/Shalom-Nisim.git

# העלאה ל-GitHub
git push -u origin main
```

## שלב 2: הגדרת GitHub Pages

### 2.1 הפעלת GitHub Pages

1. לך ל-Settings של המאגר
2. גלול למטה ל-"Pages"
3. תחת "Source" בחר "Deploy from a branch"
4. בחר "main" branch
5. בחר "/ (root)" folder
6. לחץ "Save"

### 2.2 בדיקת הפעלה

- GitHub Pages יתחיל לעבוד תוך מספר דקות
- האתר יהיה זמין בכתובת: [https://anlominus.github.io/Shalom-Nisim](https://anlominus.github.io/Shalom-Nisim)

## שלב 3: התאמות נוספות

### 3.1 עדכון כתובות

עדכן את הכתובות הבאות בקבצים:

- `package.json` - שדה `homepage`
- `README.md` - Badge links
- `.github/workflows/deploy.yml` - אם נדרש

### 3.2 הגדרת דומיין מותאם (אופציונלי)

1. צור קובץ `CNAME` עם שם הדומיין
2. הגדר DNS records במספק הדומיין

## שלב 4: בדיקות

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

- [ ] ניווט בין דפים
- [ ] מילוי טופס ושמירה
- [ ] הדפסת דפים
- [ ] תגובה למובייל
- [ ] נגישות בסיסית

## שלב 5: תחזוקה

### 5.1 עדכונים

```bash
# משיכת שינויים
git pull origin main

# הוספת שינויים
git add .
git commit -m "Update description"
git push origin main
```

### 5.2 גיבוי

- GitHub מספק גיבוי אוטומטי
- ניתן להוריד ZIP של המאגר
- מומלץ לשמור עותק מקומי

## 🔧 פתרון בעיות נפוצות

### בעיה: האתר לא נטען

**פתרון:**

1. בדוק שהקבצים הועלו נכון
2. ודא ש-GitHub Pages מופעל
3. חכה מספר דקות לעדכון

### בעיה: עיצוב לא נטען

**פתרון:**

1. בדוק שהקובץ `styles.css` קיים
2. ודא שהנתיב נכון ב-HTML
3. בדוק Console בדפדפן לשגיאות

### בעיה: JavaScript לא עובד

**פתרון:**

1. בדוק שהקובץ `script.js` קיים
2. ודא שהנתיב נכון ב-HTML
3. בדוק Console בדפדפן לשגיאות

## 📞 תמיכה

אם נתקלת בבעיות:

1. בדוק את [GitHub Pages Documentation](https://docs.github.com/en/pages)
2. חפש פתרונות ב-[GitHub Community](https://github.community)
3. פתח Issue במאגר הפרויקט

---

**לזכר ולעילוי נשמת שלום בן ויקי ז"ל**
