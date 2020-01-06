import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => (
    <h1>{props.course}</h1>
)

const Total = (props) => (
    <p>Number of exercises {props.p1.exercises +
                            props.p2.exercises +
                            props.p3.exercises}</p>
)

const Part = (props) => (
    <p>{props.p.name} {props.p.exercises}</p>
)

const Content = (props) => (
    <div>
        <Part p={props.part1} />
        <Part p={props.part2} />
        <Part p={props.part3} />
    </div>
)

const App = () => {
    const course = 'Half Stack application development'
    const part1 = {
        name: 'Fundamentals of React',
        exercises: 10
    }
    const part2 = {
        name: 'Using props to pass data',
        exercises: 7
    }
    const part3 = {
        name: 'State of a component',
        exercises: 14
    }

    return (
        <div>
            <Header course={course} />
            <Content part1={part1}
                     part2={part2}
                     part3={part3} />
            <Total p1={part1} p2={part2} p3={part3} />

        </div>
    )
}
ReactDOM.render(<App />, document.getElementById('root'))