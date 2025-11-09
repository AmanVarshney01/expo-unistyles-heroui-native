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
import { useThemeColor } from 'heroui-native';

export default function TodosScreen() {
	const [newTodoText, setNewTodoText] = useState("");
	const todos = useQuery(api.todos.getAll);
	const createTodoMutation = useMutation(api.todos.create);
	const toggleTodoMutation = useMutation(api.todos.toggle);
	const deleteTodoMutation = useMutation(api.todos.deleteTodo);
	const mutedForegroundColor = useThemeColor('surface-secondary');
	const primaryColor = useThemeColor('link');
	const destructiveColor = useThemeColor('destructive' as any);
	const primaryForegroundColor = useThemeColor('foreground');

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

	return (
		<Container>
			<ScrollView
				className="flex-1"
				contentContainerClassName="p-6"
			>
				{/* Header */}
				<View className="mb-6">
					<Text className="text-3xl font-bold text-foreground mb-2">
						Todo List
					</Text>
					<Text className="text-muted-foreground text-base">
						Manage your tasks efficiently
					</Text>
				</View>

				{/* Add Todo Input */}
				<View className="card mb-6">
					<View className="flex-row items-center gap-3">
						<View className="flex-1">
							<TextInput
								value={newTodoText}
								onChangeText={setNewTodoText}
								placeholder="Add a new task..."
								placeholderTextColor={mutedForegroundColor}
								onSubmitEditing={handleAddTodo}
								returnKeyType="done"
								className="text-foreground text-base py-2 px-4 border border-border rounded-lg bg-background"
							/>
						</View>
						<TouchableOpacity
							onPress={handleAddTodo}
							disabled={!newTodoText.trim()}
							className={`p-3 rounded-lg ${newTodoText.trim() ? "bg-primary" : "bg-muted"}`}
						>
							<Ionicons
								name="add"
								size={24}
								color={primaryForegroundColor}
							/>
						</TouchableOpacity>
					</View>
				</View>

				{/* Loading State */}
				{isLoading && (
					<View className="items-center justify-center py-12">
						<ActivityIndicator size="large" color={primaryColor} />
						<Text className="text-muted-foreground mt-4">
							Loading todos...
						</Text>
					</View>
				)}

				{/* Empty State */}
				{todos && todos.length === 0 && !isLoading && (
					<View className="items-center justify-center py-12">
						<Ionicons
							name="checkbox-outline"
							size={64}
							color={mutedForegroundColor}
							style={{ marginBottom: 16 }}
						/>
						<Text className="text-foreground text-lg font-semibold mb-2">
							No todos yet
						</Text>
						<Text className="text-muted-foreground text-center">
							Add your first task to get started!
						</Text>
					</View>
				)}

				{/* Todos List */}
				{todos && todos.length > 0 && (
					<View className="gap-3">
						{todos.map((todo) => (
							<View
								key={todo._id}
								className="card flex-row items-center gap-3"
							>
								<TouchableOpacity
									onPress={() => handleToggleTodo(todo._id, todo.completed)}
									className="p-2"
								>
									<Ionicons
										name={todo.completed ? "checkbox" : "square-outline"}
										size={28}
										color={todo.completed ? primaryColor : mutedForegroundColor}
									/>
								</TouchableOpacity>
								<View className="flex-1">
									<Text
										className={`text-base ${todo.completed
											? "text-muted-foreground line-through"
											: "text-foreground"
											}`}
									>
										{todo.text}
									</Text>
								</View>
								<TouchableOpacity
									onPress={() => handleDeleteTodo(todo._id)}
									className="p-2"
								>
									<Ionicons
										name="trash-outline"
										size={24}
										color={destructiveColor}
									/>
								</TouchableOpacity>
							</View>
						))}
					</View>
				)}
			</ScrollView>
		</Container>
	);
}

