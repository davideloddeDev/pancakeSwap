Se la trovate comoda potete consultare questi passi riguardanti l'esercizio relativo a Github

1. Creazione repository Git su Gitbub

2. Clone del repository in locale
**git clone URL-repository**

3. Creazione + spostamento → branch “development”
**git checkout -b development**

4. Creazione del file “script.js” vuoto
**touch script.js**

5. Aggiunta al file “script.js” di un array vuoto
**const team = [];**

6. Commit e push delle modifiche al file “script.js” sul branch corrente (”development”)
**git add .
git commit -m “testodelcommit”
git push origin development**

7. Partendo dal branch “development”, 
creazione + spostamento → nuovo branch personale
**git checkout -b branchPersonale** (es. nomeCognome, nomeFeature)
****
8. Modifica del file “script.js”, con aggiunta di un oggetto con i propri dati

9. Commit e push delle modifiche al file “script.js” sul branch personale
**git add .
git commit -m (testodelcommit)
git push origin (nomecognome)**

10. Prima di creare la Pull Request, dal branch personale a “development”, è necessario allineare il branch personale alle ultime modifiche del branch “development”:
    1. Aggiornare il proprio repository locale, con le informazioni più recenti del repository remoto
    **git fetch origin**
    2. Allineare il branch personale con il branch "development"
    ********************************************************git merge origin/development********************************************************
    3. Risoluzione di eventuali conflitti, se presenti, ed eseguire il commit
    **git add .
    git commit -m “testo del commit”**
    4. Push del branch c personale con le ultime modifiche
    **git push origin branchPersonale**
    
11. Creazione della Pull Request, su Github, dal branch personale a “development”
[Se la Pull Request contiene dei conflitti (segnalati da Github) ripetere il punto 10 in locale]

12. Su Github, approvazione della Pull Request appena creata, da parte del team

13. Su Github, merge della Pull Request precedentemente approvata

14. In locale, ritornare sul branch “development” e scaricare ultimi aggiornamenti
**git checkout development
git pull origin development**

15. Cancellazione del branch appena mergiato (al punto 13) in locale.
Da remoto dovrebbe essere stato cancellato, post merge della Pull Request su Github
************************************git branch -d branchPersonale************************************

16. Per aggiungere nuove features, è possibile creare un altro branch, ripetendo le operazioni dal punto 7 (partendo dal branch “development”, con la creazione di un nuovo branch personale)

Note a margine:

- se lo sviluppo del proprio branch richiede diversi giorni di lavoro, è buona pratica allineare il proprio branch al “development” più spesso possibile, eseguendo l’operazione allo step 10. 
In questo modo, quando lo sviluppo sarà completato e si sarà pronti a fare la Pull Request, i conflitti saranno minori.