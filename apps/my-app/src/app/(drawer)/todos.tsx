import { useState } from "react";
import {
	View,
	Text,
	TextInput,
	TouchableOpacity,
	ScrollView,
	ActivityIndicator,
	Alert,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useMutation, useQuery } from "convex/react";
import { api } from "@my-better-t-app/backend/convex/_generated/api";
import type { Id } from "@my-better-t-app/backend/convex/_generated/dataModel";
import { Container } from "@/components/container";

export default function TodosScreen() {
	const [newTodoText, setNewTodoText] = useState("");
	const todos = useQuery(api.todos.getAll);
	const createTodoMutation = useMutation(api.todos.create);
	const toggleTodoMutation = useMutation(api.todos.toggle);
	const deleteTodoMutation = useMutation(api.todos.deleteTodo);

	const handleAddTodo = async () => {
		const text = newTodoText.trim();
		if (!text) return;
		await createTodoMutation({ text });
		setNewTodoText("");
	};

	const handleToggleTodo = (id: Id<"todos">, currentCompleted: boolean) => {
		toggleTodoMutation({ id, completed: !currentCompleted });
	};

	const handleDeleteTodo = (id: Id<"todos">) => {
		Alert.alert("Delete Todo", "Are you sure you want to delete this todo?", [
			{ text: "Cancel", style: "cancel" },
			{
				text: "Delete",
				style: "destructive",
				onPress: () => deleteTodoMutation({ id }),
			},
		]);
	};

	const isLoading = !todos;
	const isCreating = false;
	const primaryButtonTextColor = "black";

	return (
		<Container>
			<ScrollView>
				<View>
					<Text>Todo List</Text>
					<Text>
						Manage your tasks efficiently
					</Text>

					<View>
						<TextInput
							value={newTodoText}
							onChangeText={setNewTodoText}
							placeholder="Add a new task..."
							placeholderTextColor="black"
							editable={!isCreating}
							onSubmitEditing={handleAddTodo}
							returnKeyType="done"
						/>
						<TouchableOpacity
							onPress={handleAddTodo}
							disabled={isCreating || !newTodoText.trim()}
						>
							{isCreating ? (
								<ActivityIndicator
									size="small"
									color={primaryButtonTextColor}
								/>
							) : (
								<Ionicons name="add" size={24} color={primaryButtonTextColor} />
							)}
						</TouchableOpacity>
					</View>
				</View>

				{isLoading && (
					<View>
						<ActivityIndicator size="large" color="black" />
						<Text>Loading todos...</Text>
					</View>
				)}

				{todos && todos.length === 0 && !isLoading && (
					<Text>No todos yet. Add one!</Text>
				)}
				{todos?.map((todo) => (
					<View key={todo._id}>
						<TouchableOpacity
							onPress={() => handleToggleTodo(todo._id, todo.completed)}
						>
							<Ionicons
								name={todo.completed ? "checkbox" : "square-outline"}
								size={24}
								color={
									todo.completed
										? "black"
										: "black"
								}
							/>
							<Text>
								{todo.text}
							</Text>
						</TouchableOpacity>
						<TouchableOpacity onPress={() => handleDeleteTodo(todo._id)}>
							<Ionicons
								name="trash-outline"
								size={24}
								color="black"
							/>
						</TouchableOpacity>
					</View>
				))}
			</ScrollView>
		</Container>
	);
}

