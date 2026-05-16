import { createSection, createTopic } from "./roadmapHelpers"

export const dataScienceRoadmap = {
  slug: "data-science",
  title: "Data Scientist",
  description:
    "A career roadmap for turning raw data into insight with Python, SQL, statistics, visualization, dashboards, machine learning, BI tools, and big data foundations.",
  icon: "BarChart3",
  estimatedTime: "6-10 months",
  salaryRange: "$85k - $175k",
  difficulty: "Advanced",
  sections: [
    createSection("Analytics Foundations", "Beginner", "Learn programming, querying, statistics, and data wrangling for reliable analysis.", "10-12 weeks", [
      createTopic({
        title: "Python",
        difficulty: "Beginner",
        estimatedTime: "3 weeks",
        description: "Learn Python syntax, notebooks, functions, data structures, file IO, virtual environments, and reproducible analysis workflows.",
        docsUrl: "https://docs.python.org/3/",
        projects: ["CSV profiler", "Notebook template", "Automated report generator"],
        interviewQuestions: ["How do dictionaries work?", "How do you structure notebooks?", "Why use virtual environments?"],
        prerequisites: ["Basic math"],
        tags: ["python", "notebooks", "analysis"]
      }),
      createTopic({
        title: "SQL",
        difficulty: "Beginner",
        estimatedTime: "4 weeks",
        description: "Master SELECT, joins, grouping, window functions, CTEs, subqueries, indexing intuition, and analytics query patterns.",
        docsUrl: "https://www.postgresql.org/docs/current/tutorial-sql.html",
        projects: ["Sales dashboard queries", "Customer retention cohort query", "SQL interview question set"],
        interviewQuestions: ["INNER JOIN vs LEFT JOIN?", "What are window functions?", "How do CTEs improve readability?"],
        prerequisites: ["Data basics"],
        tags: ["sql", "analytics", "postgres"]
      }),
      createTopic({
        title: "Statistics",
        difficulty: "Beginner",
        estimatedTime: "4 weeks",
        description: "Study distributions, probability, sampling, hypothesis testing, confidence intervals, regression, experiment design, and statistical pitfalls.",
        docsUrl: "https://www.khanacademy.org/math/statistics-probability",
        projects: ["A/B test report", "Survey analysis", "Confidence interval calculator"],
        interviewQuestions: ["Mean vs median?", "What is statistical significance?", "What is sampling bias?"],
        prerequisites: ["Python"],
        tags: ["statistics", "experiments", "probability"]
      }),
      createTopic({
        title: "Pandas",
        difficulty: "Beginner",
        estimatedTime: "3 weeks",
        description: "Manipulate DataFrames, clean data, merge datasets, aggregate groups, handle time series, and prepare features for analysis.",
        docsUrl: "https://pandas.pydata.org/docs/",
        projects: ["Data analytics project", "Messy sales cleanup", "Exploratory data analysis notebook"],
        interviewQuestions: ["How does groupby work?", "How do you handle missing values?", "Merge vs concat?"],
        prerequisites: ["Python", "SQL"],
        tags: ["pandas", "eda", "data-cleaning"]
      })
    ]),
    createSection("Insight and Modeling", "Intermediate", "Communicate insights through charts, dashboards, BI tools, and predictive models.", "10-14 weeks", [
      createTopic({
        title: "Visualization",
        difficulty: "Intermediate",
        estimatedTime: "3 weeks",
        description: "Design charts with clear encoding, context, accessibility, storytelling, uncertainty, and dashboard composition.",
        docsUrl: "https://matplotlib.org/stable/users/index",
        projects: ["Sales dashboard", "Executive KPI report", "Interactive chart gallery"],
        interviewQuestions: ["How do you choose chart types?", "What makes a dashboard misleading?", "How do you show uncertainty?"],
        prerequisites: ["Pandas", "Statistics"],
        tags: ["visualization", "matplotlib", "storytelling"]
      }),
      createTopic({
        title: "Machine Learning",
        difficulty: "Intermediate",
        estimatedTime: "5 weeks",
        description: "Train models with feature engineering, validation, metrics, classification, regression, clustering, model comparison, and error analysis.",
        docsUrl: "https://scikit-learn.org/stable/user_guide.html",
        projects: ["Stock prediction", "Customer churn model", "Recommendation baseline"],
        interviewQuestions: ["How do you prevent overfitting?", "What metrics fit classification?", "What is cross-validation?"],
        prerequisites: ["Statistics", "Pandas"],
        tags: ["machine-learning", "sklearn", "metrics"]
      }),
      createTopic({
        title: "Tableau",
        difficulty: "Intermediate",
        estimatedTime: "2 weeks",
        description: "Create dashboards, calculated fields, filters, parameters, extracts, actions, and polished BI storytelling experiences.",
        docsUrl: "https://help.tableau.com/current/guides/get-started-tutorial/en-us/get-started-tutorial-home.htm",
        projects: ["Executive sales dashboard", "Regional performance dashboard", "Self-service analytics prototype"],
        interviewQuestions: ["What are calculated fields?", "Extract vs live connection?", "How do dashboard actions work?"],
        prerequisites: ["SQL", "Visualization"],
        tags: ["tableau", "dashboard", "bi"]
      }),
      createTopic({
        title: "Power BI",
        difficulty: "Intermediate",
        estimatedTime: "2 weeks",
        description: "Use Power Query, DAX, data models, relationships, measures, reports, refresh schedules, and stakeholder-ready dashboards.",
        docsUrl: "https://learn.microsoft.com/en-us/power-bi/",
        projects: ["Finance dashboard", "Data model with DAX measures", "Power Query cleanup flow"],
        interviewQuestions: ["What is DAX?", "How do relationships affect measures?", "Power Query vs DAX?"],
        prerequisites: ["SQL", "Visualization"],
        tags: ["power-bi", "dax", "dashboard"]
      })
    ]),
    createSection("Scale and Production Analytics", "Advanced", "Work with larger data systems, reproducibility, and production-facing analysis workflows.", "6-10 weeks", [
      createTopic({
        title: "Big Data",
        difficulty: "Advanced",
        estimatedTime: "4 weeks",
        description: "Learn distributed processing concepts, Spark basics, data lakes, partitioning, batch pipelines, warehouse modeling, and cost-aware analytics.",
        docsUrl: "https://spark.apache.org/docs/latest/",
        projects: ["Large dataset analysis in Spark", "Partitioned data lake prototype", "Batch analytics pipeline"],
        interviewQuestions: ["What is partitioning?", "When does Pandas stop scaling?", "How does Spark process data?"],
        prerequisites: ["SQL", "Pandas", "Machine Learning"],
        tags: ["big-data", "spark", "data-lake"]
      }),
      createTopic({
        title: "Analytics Portfolio",
        difficulty: "Advanced",
        estimatedTime: "4 weeks",
        description: "Package notebooks, dashboards, reports, model cards, and business recommendations into a clear portfolio that shows analytical judgment.",
        docsUrl: "https://github.com/",
        projects: ["End-to-end sales analytics case study", "Public dashboard portfolio", "Model evaluation report"],
        interviewQuestions: ["How do you communicate uncertainty?", "How do you turn analysis into action?", "How do you validate data quality?"],
        prerequisites: ["Visualization", "Machine Learning", "BI tools"],
        tags: ["portfolio", "case-study", "communication"]
      })
    ])
  ]
}
